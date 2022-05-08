import React from 'react';
import TopicCard from '../card/TopicCard';


import './sidebar.css';
function Sidebar({topics,setCurrentTopic}) {
    return (
        <div className='sidebar'> 
            {
                topics.map(topic=><TopicCard key={topic.id} topic={topic} customStyle={{width:"100%",height:60}} onClick={setCurrentTopic}/>)
            }
        </div>
    );
}

export default Sidebar;