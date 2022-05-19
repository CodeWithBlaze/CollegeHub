import React from 'react';
import './heading_text.css';
function HeadingText({label,subheading,customTextStyle,customContainerStyle,customSubheadingStyle}) {
    return (
        <div style={customContainerStyle}>
            <h1 style={customTextStyle} className="heading-text-label">{label}</h1>
            {subheading && <p style={customSubheadingStyle} className='subheading-text-label'>{subheading}</p>}
        </div>
        
    );
}

export default HeadingText;