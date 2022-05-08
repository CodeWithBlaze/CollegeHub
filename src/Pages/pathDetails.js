import React from 'react';
import { useLocation } from 'react-router-dom';
import BackgroundImage from '../components/backgrounds/BackgroundImage';
import PathCategory from '../components/path/PathCategory';

import './pathdetails.css';

function PathDetails() {
    const {image,label,categories} = useLocation().state;
    return (
        <BackgroundImage image={image}>
            <div className='path-details-container'>
                <h1 className='path-details-heading'>{label} Path</h1>
                {
                    categories.map(category=><PathCategory category={category}/>)
                }
            </div>
        </BackgroundImage>        
    );
}

export default PathDetails;