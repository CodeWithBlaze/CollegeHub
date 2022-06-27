import { useEffect, useState } from "react";
import TopicCard from "../components/card/TopicCard";
import SearchBar from "../components/input/SearchBar";
import Navbar from '../components/navbar/Navbar';
import LoadMoreButton from '../components/buttons/LoadMoreButton';

import './topic.css';

import { READ_TOPIC_URL, TUTORIAL_ROUTE,SEARCH_TOPIC_URL } from "../config/CONFIG";
import FetchData from '../hooks/useFetchData';
import SearchData from "../hooks/useSearch";


const TOPIC_LIMIT = '';
const Topic = () => {
    const [topics,setTopics] = useState([]);
    const [lastTopicId,setLastTopicId] = useState('')
    const [searchInput,setSearchInput] = useState('');
    const [searchResult,setSearchResult] = useState([])
    async function getTopics(){
        const last_topic_id = await FetchData(READ_TOPIC_URL,TOPIC_LIMIT,lastTopicId,topics,setTopics);
        setLastTopicId(last_topic_id);
        
    }
    
    function searchTopic(query){
        SearchData(SEARCH_TOPIC_URL,query,(res)=>setSearchResult(res.data),(err)=>console.log(err))
    }
    function clearSearch(){
        setSearchResult([])
    }
    useEffect(()=>{
        getTopics();
    },[])
    return (
        <>
        <Navbar bg_color="#2A2E35"/>
        <div className="topic-page-layout">
               
                <SearchBar 
                placeholder={"Search Topics"} 
                width={"50%"} 
                customStyle={{height:50,backgroundColor:'rgba(83,83,83,0.5)',color:'#8D8D8D'}}
                value={searchInput}
                setValue={setSearchInput}
                search={searchTopic}
                searchClear={clearSearch}
                />
               
                 <div className="topic-container">
                     {
                        searchResult.length === 0 && topics.map(topic=><TopicCard key={topic._id} topic={topic} customStyle={{width:"100%"}} link={TUTORIAL_ROUTE}/>)
                     }
                     {
                        searchResult.length !== 0 && searchResult.map(topic=><TopicCard key={topic._id} topic={topic} customStyle={{width:"100%"}} link={TUTORIAL_ROUTE}/>)
                     }
                </div>
                {searchResult.length === 0 && <LoadMoreButton label="Load More"  onClick={()=>getTopics()} hasNext={lastTopicId?true:false}/>}
        </div>
        
        </> 
        
     );
}
 
export default Topic;