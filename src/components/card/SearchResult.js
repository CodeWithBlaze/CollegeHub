import React from 'react';
import './search_result.css';
function SearchResult({value,onClick}) {
    return (
        <div className='search-result-card-container' onClick={onClick}>
            <label>{value}</label>
        </div>
    );
}

export default SearchResult;