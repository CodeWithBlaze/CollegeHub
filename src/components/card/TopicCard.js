import React from 'react';
import { Link } from 'react-router-dom';
import './topiccard.css';
function TopicCard({customStyle,topic,onClick,link}) {
    return (
        <div className='topic-card-container' style={customStyle}>
            <h4>{topic.label}</h4>
            {link && <Link to={link} state={{initialTopic:topic,TopicList:[topic]}} style={{textDecoration:'none',color:'#A4A4A4'}}><label>Preview</label></Link>}
            {onClick && <label onClick={()=>onClick(topic)}>Preview</label>}
        </div>
    );
}

export default TopicCard;