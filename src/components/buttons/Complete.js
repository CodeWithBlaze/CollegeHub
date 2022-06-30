import React from 'react';
import './complete-button.css';
function Complete({label,width,height,onClick}) {
    return (
        <button className='complete-btn' style={{width,height}} onClick={onClick}>{label}</button>
    );
}

export default Complete;