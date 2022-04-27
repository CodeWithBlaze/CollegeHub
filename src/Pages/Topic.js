import { useState } from "react";
import TopicCard from "../components/card/TopicCard";
import SearchBar from "../components/input/SearchBar";

import Navbar from '../components/navbar/Navbar';
import FilterCard from "../components/tags/FilterCard";
import './topic.css';

const customStyle = {width:100}
const AUTHOR = 'author';
const LANGUAGE = 'language'; 
const TITLE = 'title'; 
const Topic = () => {
    const [activeSearch,setActiveSearch] = useState(TITLE);
    function handleActiveSearch(new_active){
        setActiveSearch(new_active);
    }
    return (
        <>
        <Navbar bg_color="transparent"/>
        <div className="topic-page-layout">
               <div className="topic-filter">
                <SearchBar placeholder={`Search by ${activeSearch}`} customStyle={{width:'100%',height:50,color:'red',backgroundColor:'rgba(83,83,83,0.5)',color:'#8D8D8D'}}/>
                <div className="filter-card-container">
                    <FilterCard label="Language" active={activeSearch==LANGUAGE}   onClick={()=>setActiveSearch(LANGUAGE)} customStyle={customStyle}/>
                    <FilterCard label="Author"   active={activeSearch==AUTHOR}     onClick={()=>setActiveSearch(AUTHOR)} customStyle={customStyle}/>
                    <FilterCard label="Title"    active={activeSearch==TITLE}      onClick={()=>setActiveSearch(TITLE)} customStyle={customStyle}/>
                </div>
                
                </div>
                 <div className="topic-container">
                <TopicCard label="Why we need Routers" customStyle={{width:"100%",height:60}}/>
                <TopicCard label="Why we need Routers" customStyle={{width:"100%",height:60}}/>
                <TopicCard label="Why we need Routers" customStyle={{width:"100%",height:60}}/>
                <TopicCard label="Why we need Routers" customStyle={{width:"100%",height:60}}/>
                <TopicCard label="Why we need Routers" customStyle={{width:"100%",height:60}}/>
                </div>
        </div>
        
        </> 
        
     );
}
 
export default Topic;