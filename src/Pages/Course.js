import './course.css';
import Navbar from '../components/navbar/Navbar';
import AnimatedFillButton from '../components/buttons/AnimatedFillButton';
import Courses from '../components/course/Courses';
import Paths from '../components/path/Paths';
import { useState,useEffect } from 'react';
import FetchData from '../hooks/useFetchData';
import LoadMoreButton from '../components/buttons/LoadMoreButton';
import { READ_COURSE_URL,READ_PATH_URL, SEARCH_COURSE_URL, SEARCH_PATH_URL } from '../config/CONFIG';
import SearchBar from '../components/input/SearchBar';
import SearchData from '../hooks/useSearch';

const COURSE_LIMIT = '';
const PATH_LIMIT = '';
const Course = ({userProgress}) => {
    const [active,setActive] = useState(0);
    const [courses,setCourses] = useState([]);
    const [paths,setPaths] = useState([]);
    const [search,setSearch] = useState('');
    const [searchResult,setSearchResult] = useState([])
    const [lastCourseID,setLastCourseID] = useState('');
    const [lastPathID,setPathCourseID] = useState('');
    async function fetchCourse(){
            const last_course_id = await FetchData(READ_COURSE_URL,COURSE_LIMIT,lastCourseID,courses,setCourses);
            setLastCourseID(last_course_id);
    }
    async function fetchPaths(){
        const last_path_id = await FetchData(READ_PATH_URL,PATH_LIMIT,lastPathID,paths,setPaths);
        setPathCourseID(last_path_id);
    }
    function searchCourseAndPath(query){
        SearchData(active === 0 ? SEARCH_COURSE_URL:SEARCH_PATH_URL,query,(res)=>setSearchResult(res.data),(err)=>console.log(err))
    }
    function clearSearch(){
        setSearchResult([])
    }
    useEffect(()=>{
        fetchCourse();
        fetchPaths();
    },[])
        
        
    return ( 
        <>
        <Navbar bg_color='#2A2E35'/>
        <section>
            <div className='course-buttons'>
                <AnimatedFillButton 
                label="COURSES" 
                customStyle={{width:160,height:60}}
                active={active === 0}
                onClick={()=>{setActive(0);clearSearch()}} 
                color="green"/>
                <AnimatedFillButton 
                label="PATHS" 
                customStyle={{width:160,height:60}}
                active={active === 1} 
                onClick={()=>{setActive(1);clearSearch()}} 
                color="blue"/>
            </div>
           <div className='course-searchbar-container'>
           <SearchBar 
            placeholder={active === 0 ? "Search for Courses":"Search for Paths"} 
            value={search} setValue={setSearch} search={searchCourseAndPath}
            searchClear={clearSearch}
            customStyle={{height:50,backgroundColor:'rgba(83,83,83,0.5)',color:'#8D8D8D'}}/>
           </div>
            <div className='course-path-container'>
               {active === 0 ? <Courses courses={courses} userProgress={userProgress} searchResult={searchResult}/>:<Paths paths={paths} searchResult={searchResult}/>}
            </div>
            {active === 0 && searchResult.length === 0 && <LoadMoreButton label="Load More"  onClick={()=>fetchCourse()} hasNext={lastCourseID?true:false}/>}
            {active === 1 && searchResult.length === 0 && <LoadMoreButton label="Load More"  onClick={()=>fetchPaths()} hasNext={lastPathID?true:false}/>}
               
        </section>
        </>
     );
}
 
export default Course;