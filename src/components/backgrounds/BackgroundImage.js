import React from 'react';
import Navbar from '../navbar/Navbar';

import './background_image.css';
function BackgroundImage(props) {
    return (
        <>
        <Navbar bg_color='#2A2E35'/>
        <div className='course-details-container'>
            <div className='course-details-image-container'>
                 <img src={props.image} alt="Backgorund"/>
            </div>
            {props.children}
        </div>
        </>
    );
}

export default BackgroundImage;