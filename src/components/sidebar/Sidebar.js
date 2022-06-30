import React from 'react';
import TopicCard from '../card/TopicCard';


import './sidebar.css';
function Sidebar({topics,setCurrentTopic,completedTopicsId}) {
    return (
        <div className='sidebar'> 
            {
                topics.map(topic=>
                <TopicCard 
                key={topic._id} 
                topic={topic} 
                customStyle={{width:"100%",height:60}} 
                onClick={setCurrentTopic}
                isCompleted = {completedTopicsId.includes(topic._id)}
                />)
            }
        </div>
    );
}

export default Sidebar;