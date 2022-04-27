import React from 'react';
import './filtercard.css';
function FilterCard({label,customStyle,active,onClick}) {
    return (
        <div className={`filter-card ${active?'active':''}`} style={customStyle} onClick={onClick}>
            <label>{label}</label>
        </div>
    );
}

export default FilterCard;