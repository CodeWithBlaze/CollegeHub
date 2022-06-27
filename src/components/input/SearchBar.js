import { useState } from 'react';
import SearchResult from '../card/SearchResult';
import './inputbox.css';
const SearchBar = ({placeholder,width,customStyle,value,setValue,search,searchClear}) => {
    const [searchResult,setSearchResult] = useState('')
    
    return (
        <>
        <div className='search-bar-container' style={{width}}>
            <input 
            style={customStyle} 
            placeholder={placeholder} 
            value={value}
            onChange={(value)=>setValue(value.target.value)}
            className="input-box"/>
            <br/>
            <i className="fa-solid fa-magnifying-glass search-icon" onClick={()=>{search(value);setSearchResult(value)}}/>
        </div>
        {
            searchResult && <SearchResult value={searchResult} onClick={()=>{searchClear();setSearchResult('');setValue('')}}/> 
        }
        </>
        
     );
}
 
export default SearchBar;