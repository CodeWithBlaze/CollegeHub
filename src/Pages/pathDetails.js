import React from 'react';
import { useLocation } from 'react-router-dom';
import BackgroundImage from '../components/backgrounds/BackgroundImage';
import AnimatedFillButton from '../components/buttons/AnimatedFillButton';
import PathCategory from '../components/path/PathCategory';

import './pathdetails.css';

function PathDetails() {
    const {image,label,categories} = useLocation().state;
    return (
        <BackgroundImage image={image}>
            <div className='path-details-container'>
                <h1 className='path-details-heading'>{label} Path</h1>
                {
                    categories.map(category=><PathCategory category={category} key={category._id}/>)
                }
                <div className='path-details-heading'>
                <AnimatedFillButton 
                label={`🔥 ENROLL IN ${label.toUpperCase()} PATH 🔥`} 
                customStyle={{width:'90%',height:'fit-content',textAlign:'center',fontSize:30}}
                color="green"/>
                </div>
            </div>
            
        </BackgroundImage>        
    );
}

export default PathDetails;