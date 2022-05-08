import React from 'react';
import './iconbutton.css';
function IconButton({customStyle,customIconStyle,customTextStyle,label,onClick,icon="fa-solid fa-bolt"}) {
    return (
        <button className='icon-btn' style={customStyle} onClick={onClick}>
            <i className={icon} style={customIconStyle}></i>
            <label style={{customTextStyle}}>{label}</label>
        </button>
    );
}

export default IconButton;