import React from 'react';
import tags from '../../database/sample_tags';
import TagCard from './TagCard';

function Tags(props) {
    return (
        <div className='course-tag-container'>
        {
            tags.map(tag=><TagCard marginRight={60} height={60} label={tag.label}/>)
        }
    
        </div>
    );
}

export default Tags;