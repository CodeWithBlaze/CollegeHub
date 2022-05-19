import React from 'react';
import './animated_button.css';
function AnimatedFillButton({customStyle,label,color,onClick,active}) {
    return (
        <button className={`animated ${color} `+(active?`active-${color}`:'')} style={customStyle} onClick={onClick}>
            {label}
        </button>
    );
}

export default AnimatedFillButton;