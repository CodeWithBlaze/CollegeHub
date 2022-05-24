import React from 'react';
import Navbar from '../navbar/Navbar';

import './background_image.css';
function BackgroundImage(props) {
    console.log(props.image);
    return (
        <>
        <Navbar bg_color='rgba(0, 0, 0, 0.48)'/>
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