import React from 'react';
import AnimatedFillButton from './AnimatedFillButton';
import './load-more.css';
function LoadMoreButton({label,onClick,hasNext}) {
    return (
        <div className='load-more-button'>
            {
                hasNext ? 
                <AnimatedFillButton 
                label={label} 
                customStyle={{width:160,height:60}}
                onClick={onClick} 
                color="green"/>
                :
                <h3 className='load-more-text'>No More Data to Load</h3>
            }
            
        </div>
    );
}

export default LoadMoreButton;