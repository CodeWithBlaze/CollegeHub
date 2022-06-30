import {useState } from 'react';
import PracticeCard from '../card/PracticeCard';
import './tabcomponent.css';

const jdoodle_link = "https://www.jdoodle.com/iembed/v0/";
const Resources=({description})=>{
    return <p className='tab-description'>{description}</p>
}
const Practice=({topic})=>{
    return <PracticeCard currentTopic={topic}/>
}
const AuthorCode=({links,activeLink,setActiveLink})=>{
    return (
    <>
    {links.map((link,index)=><button onClick={()=>setActiveLink(jdoodle_link+link)}>Code {index}</button>)}
    <div data-pym-src={activeLink} key={activeLink} style={{width:'100%',height:"fit-content",backgroundColor:"white"}}></div>
    </>
    )
}
const Test=({topic})=>{
    return <iframe src={`https://docs.google.com/forms/d/e/${topic.test_link}/viewform?embedded=true`} width="640" height="947" frameborder="0" marginheight="0" marginwidth="0" title='test-document'>Loading…</iframe>
}
const getTabComponent=(tab,activeLink,setActiveLink,topic)=>{
    if(tab === 0)
        return <Resources description={topic.description}/>
    else if(tab === 1){
        loadScriptsForJDoodle();
        return <AuthorCode links={topic.author_code} activeLink={activeLink} setActiveLink={setActiveLink}/>
    }
        
    else if(tab === 2)
        return <Practice topic={topic}/>
    else
        return <Test topic={topic}/>
}
function loadScriptsForJDoodle(){
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/ace/1.4.14/ace.min.js';
    script.integrity = 'sha512-hDyKEpCc9jPn3u2VffFjScCtNqZI+BAbThAhhDYqqqZbxMqmTSNIgdU0OU9BRD/8wFxHIWLAo561hh9fW7j6sA=='
    script.crossOrigin = 'anonymous';
    script.referrerPolicy = 'no-referrer';

    const script2 = document.createElement('script');
    script2.src="https://www.jdoodle.com/assets/jdoodle-pym.min.js";
    document.body.appendChild(script);
    document.body.appendChild(script2);
    console.log("All script Loadded")
}


const TabComponent = ({topic}) => {
    const [tab,setTab] = useState(0);
    const [activeTab,setActiveTab] = useState(0);
    const [activeLink,setActiveLink] = useState(jdoodle_link+topic.author_code[0])
    
    return ( 
        <div className='tabcomponent-container'>
            <div className='tabs'>
                <label onClick={()=>{setTab(0);setActiveTab(0)}} className={activeTab===0?'activeTab':'not-active'}>Resources</label>
                <label onClick={()=>{setTab(1);setActiveTab(1)}} className={activeTab===1?'activeTab':'not-active'}>Author Code</label>
                <label onClick={()=>{setTab(2);setActiveTab(2)}} className={activeTab===2?'activeTab':'not-active'}>Practice</label>
                <label onClick={()=>{setTab(3);setActiveTab(3)}} className={activeTab===3?'activeTab':'not-active'}>Test</label>
            </div>
            <div className='tab-container'>
                {getTabComponent(tab,activeLink,setActiveLink,topic)}
            </div>
        </div>
     );
}
 
export default TabComponent;