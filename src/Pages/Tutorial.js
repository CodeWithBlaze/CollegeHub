import {useState} from 'react';
import Navbar from '../components/navbar/Navbar';
import TabComponent from '../components/Tab/TabComponent';
import './tutorial.css';

const TutorialPage = () => {
    const [isWhiteBoard,setIsWhiteBoard] = useState(false);
    return (
        <>
        <button className='board-button' onClick={()=>setIsWhiteBoard(!isWhiteBoard)}>{isWhiteBoard?'Switch to Code':'Switch to Board'}</button>
        <Navbar bg_color='transparent'/>
        <div className='tutorial-container'>
            <section className='editor-container'>
            <iframe frameborder="0" width="100%" style={{height:"100%",borderRadius:5,border:'2px solid black',display:isWhiteBoard?'none':'flex'}} src="https://replit.com/@SagnikSaha4/JavaProgram?lite=true"></iframe>
            <iframe src="https://v1.embednotion.com/embed/9cdea7b3b19c4635ab31cd12b4c912fb" style={{display:isWhiteBoard?'flex':'none',width:'100%',height:'100%',borderRadius:5,border:'2px solid black',}}></iframe>
            </section>
            <section className='video-container'>
            <iframe width="100%" height="390" style={{border:'2px solid black'}} src="https://www.youtube.com/embed/r_MbozD32eo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>
            <TabComponent/>
            </section>
        </div>
        </> 
        
     );
}
 
export default TutorialPage;