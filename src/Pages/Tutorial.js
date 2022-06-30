import {useContext, useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom';
import Complete from '../components/buttons/Complete';
import Navbar from '../components/navbar/Navbar';
import Sidebar from '../components/sidebar/Sidebar';
import TabComponent from '../components/Tab/TabComponent';
import SetToastContainer,{getSuccessToast,getErrorToast} from '../components/toast/Toast';
import { NOTION_EMBED, YOUTUBE_EMBED } from '../config/CONFIG';
import UserAuthContext from '../context/UserAuthContext';
import { getAuthState } from '../firebase/functions/auth';
import FetchTopicById from '../hooks/useFetchTopicById';
import {GetTopicCompleted, TopicCompleted} from '../hooks/useTopicComplete';
import './tutorial.css';


const TutorialPage = () => {
    const [isWhiteBoard,setIsWhiteBoard] = useState(false);
    const [isVisibleCurriculum,setIsVisibleCurriculum] = useState(false);
    const [TopicList,setTopicList] = useState([])
    const {topic_id,course_id} = useLocation().state
    const [currentTopic,setCurrentTopic] = useState('');
    const [topicCompleted,setTopicCompleted] = useState([]);
    const user = useContext(UserAuthContext)
    function markTopicComplete(){
        TopicCompleted(course_id,currentTopic._id)
        .then(res=>{getSuccessToast('Topic Completed Successfully');setTopicCompleted([...topicCompleted,currentTopic._id])})
        .catch(err=>getErrorToast("Something went wrong"))
    }
    function getCompletedTopics(){
        GetTopicCompleted(course_id)
        .then(res=>setTopicCompleted(res.data.coursesEnrolled[course_id]))
        .catch(err=>console.log(err))

    }
    function checkIfmarkedComplete(){
        if(!course_id)
            return true;
        return !topicCompleted.includes(currentTopic._id)
    }
    useEffect(()=>{
        console.log("Called")
        if(topic_id)
            FetchTopicById(topic_id)
            .then(res=>{
                setTopicList(res.data)
                setCurrentTopic(res.data[0])
                if(user.auth && course_id)
                    getCompletedTopics()
                else 
                    setTopicCompleted([])
            })
            .catch(err=>console.log(err))
    },[user])
    
    return (
        <>
        {
            currentTopic ?
            
            <div>
            <div className='board-button-container'>
                <button className='board-button' onClick={()=>setIsWhiteBoard(!isWhiteBoard)}>{isWhiteBoard?'Switch to Code':'Read Theory'}</button>
                <button className='board-button' onClick={()=>setIsVisibleCurriculum(!isVisibleCurriculum)}>{isVisibleCurriculum?'Hide Curriculum':'Show Curriculum'}</button>
            </div>
            <aside>
                {
                isVisibleCurriculum  && <Sidebar topics={TopicList} setCurrentTopic={setCurrentTopic} completedTopicsId={topicCompleted}/>
                }
            </aside>
            <Navbar bg_color='#2A2E35'/>
            <div className='tutorial-container'>
                <section className='editor-container'>
                <iframe title='code' frameBorder="0" width="100%" style={{height:"100%",borderRadius:5,border:'2px solid black',display:isWhiteBoard?'none':'flex'}} src={`https://replit.com/@${currentTopic.editor}?lite=true`}>{console.log(currentTopic.editor)}</iframe>
                <iframe title='notion' src={`${NOTION_EMBED}/${currentTopic.notion}`} style={{display:isWhiteBoard?'flex':'none',width:'100%',height:'100%',borderRadius:5,border:'2px solid black',}}></iframe>
                </section>
                <section className='tutorial-video-container'>
                <iframe   width="100%"  style={{border:'2px solid black'}} src={`${YOUTUBE_EMBED}/${currentTopic.link}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="allowfullscreen"></iframe>
                { getAuthState() && course_id && topic_id && checkIfmarkedComplete() && <Complete label={'Mark as complete'} onClick={()=>markTopicComplete()}/>}
                <TabComponent topic={currentTopic}/>
                </section>
            </div>
        </div>
        :
        <h1 style={{color:'white'}}>Loading</h1>
        }
        <SetToastContainer/>
        </> 
        
     );
}
 
export default TutorialPage;