import React from 'react';
import { Link } from 'react-router-dom';
import './topiccard.css';
function TopicCard({customStyle,label="Some text"}) {
    return (
        <div className='topic-card-container' style={customStyle}>
            <h4>{label}</h4>
            <Link to="/" style={{textDecoration:'none',color:'#A4A4A4'}}><label>Show Details</label></Link>
        </div>
    );
}

export default TopicCard;