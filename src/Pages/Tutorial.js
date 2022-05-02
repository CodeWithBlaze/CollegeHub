import {useState} from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import TabComponent from '../components/Tab/TabComponent';
import './tutorial.css';

const TutorialPage = () => {
    const [isWhiteBoard,setIsWhiteBoard] = useState(false);
    const location = useLocation()
    console.log(location.state)
    return (
        <>
        <button className='board-button' onClick={()=>setIsWhiteBoard(!isWhiteBoard)}>{isWhiteBoard?'Switch to Code':'Switch to Board'}</button>
        <Navbar bg_color='transparent'/>
        <div className='tutorial-container'>
            <section className='editor-container'>
            <iframe title='code' frameborder="0" width="100%" style={{height:"100%",borderRadius:5,border:'2px solid black',display:isWhiteBoard?'none':'flex'}} src="https://replit.com/@SagnikSaha4/JavaProgram?lite=true"></iframe>
            <iframe title='notion' src={`https://v1.embednotion.com/embed/${location.state.notion}`} style={{display:isWhiteBoard?'flex':'none',width:'100%',height:'100%',borderRadius:5,border:'2px solid black',}}></iframe>
            </section>
            <section className='video-container'>
            <iframe   width="100%" height="390" style={{border:'2px solid black'}} src={`https://www.youtube.com/embed/${location.state.link}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>
            <TabComponent topic={location.state}/>
            </section>
        </div>
        </> 
        
     );
}
 
export default TutorialPage;