import { useEffect, useState } from 'react';
import './tabcomponent.css';


const Resources=()=>{
    return <h1>Resources</h1>
}
const Practice=()=>{
    return <h1>Practice</h1>
}
const AuthorCode=({links,activeLink,setActiveLink})=>{
    console.log(activeLink)
    return (
    <>
    {links.map((link,index)=><button onClick={()=>setActiveLink(link)}>Code {index}</button>)}
    <div data-pym-src={activeLink} key={activeLink} style={{width:'100%',height:"fit-content",backgroundColor:"white"}}></div>
    </>
    )
}
const Test=()=>{
    return <h1>Test</h1>
}
const getTabComponent=(tab,activeLink,setActiveLink)=>{
    if(tab == 0)
        return <Resources/>
    else if(tab == 1){
        loadScriptsForJDoodle();
        return <AuthorCode links={links} activeLink={activeLink} setActiveLink={setActiveLink}/>
    }
        
    else if(tab == 2)
        return <Practice/>
    else
        return <Test/>
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
const links = ["https://www.jdoodle.com/embed/v0/2?stdin=0&arg=0","https://www.jdoodle.com/iembed/v0/pQw"]

const TabComponent = () => {
    const [tab,setTab] = useState(0);
    const [activeTab,setActiveTab] = useState(0);
    const [activeLink,setActiveLink] = useState(links[1])
    
    return ( 
        <div className='tabcomponent-container'>
            <div className='tabs'>
                <label onClick={()=>{setTab(0);setActiveTab(0)}} className={activeTab==0?'activeTab':'not-active'}>Resources</label>
                <label onClick={()=>{setTab(1);setActiveTab(1)}} className={activeTab==1?'activeTab':'not-active'}>Author Code</label>
                <label onClick={()=>{setTab(2);setActiveTab(2)}} className={activeTab==2?'activeTab':'not-active'}>Practice</label>
                <label onClick={()=>{setTab(3);setActiveTab(3)}} className={activeTab==3?'activeTab':'not-active'}>Test</label>
            </div>
            <div className='tab-container'>
                {getTabComponent(tab,activeLink,setActiveLink)}
            </div>
        </div>
     );
}
 
export default TabComponent;