import React from 'react';
import { Link } from 'react-router-dom';
import './topiccard.css';
function TopicCard({customStyle,label="Some text",topic}) {
    return (
        <div className='topic-card-container' style={customStyle}>
            <h4>{topic.label}</h4>
            <Link to="/tutorial" state={topic} style={{textDecoration:'none',color:'#A4A4A4'}}><label>Preview</label></Link>
        </div>
    );
}

export default TopicCard;