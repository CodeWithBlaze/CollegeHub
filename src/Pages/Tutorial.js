import {useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import Sidebar from '../components/sidebar/Sidebar';
import TabComponent from '../components/Tab/TabComponent';
import SetToastContainer from '../components/toast/Toast';
import { NOTION_EMBED, YOUTUBE_EMBED } from '../config/CONFIG';
import FetchTopicById from '../hooks/useFetchTopicById';
import './tutorial.css';


const TutorialPage = () => {
    const [isWhiteBoard,setIsWhiteBoard] = useState(false);
    const [isVisibleCurriculum,setIsVisibleCurriculum] = useState(false);
    const [TopicList,setTopicList] = useState([])
    const {topic_id} = useLocation().state
    const [currentTopic,setCurrentTopic] = useState('');
    useEffect(()=>{
        if(topic_id)
            FetchTopicById(topic_id)
            .then(res=>{
                setTopicList(res.data)
                setCurrentTopic(res.data[0])
            })
            .catch(err=>console.log(err))
    },[])
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
                isVisibleCurriculum  && <Sidebar topics={TopicList} setCurrentTopic={setCurrentTopic}/>
                }
            </aside>
            <Navbar bg_color='transparent'/>
            <div className='tutorial-container'>
                <section className='editor-container'>
                <iframe title='code' frameBorder="0" width="100%" style={{height:"100%",borderRadius:5,border:'2px solid black',display:isWhiteBoard?'none':'flex'}} src="https://replit.com/@SagnikSaha4/JavaProgram?lite=true"></iframe>
                <iframe title='notion' src={`${NOTION_EMBED}/${currentTopic.notion}`} style={{display:isWhiteBoard?'flex':'none',width:'100%',height:'100%',borderRadius:5,border:'2px solid black',}}></iframe>
                </section>
                <section className='tutorial-video-container'>
                <iframe   width="100%"  style={{border:'2px solid black'}} src={`${YOUTUBE_EMBED}/${currentTopic.link}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="allowfullscreen"></iframe>
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