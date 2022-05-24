import './course.css';
import Navbar from '../components/navbar/Navbar';
import AnimatedFillButton from '../components/buttons/AnimatedFillButton';
import Courses from '../components/course/Courses';
import Paths from '../components/path/Paths';
import { useState,useEffect } from 'react';
import FetchData from '../hooks/useFetchData';
import LoadMoreButton from '../components/buttons/LoadMoreButton';
import { READ_COURSE_URL,READ_TOPIC_URL } from '../config/CONFIG';

const COURSE_LIMIT = '';
const PATH_LIMIT = '';
const Course = () => {
    const [active,setActive] = useState(0);
    const [courses,setCourses] = useState([]);
    const [paths,setPaths] = useState([]);
    const [lastCourseID,setLastCourseID] = useState('');
    const [lastPathID,setPathCourseID] = useState('');
    async function fetchCourse(){
            const last_course_id = await FetchData(READ_COURSE_URL,COURSE_LIMIT,lastCourseID,courses,setCourses);
            setLastCourseID(last_course_id);
    }
    async function fetchPaths(){
        const last_path_id = await FetchData(READ_TOPIC_URL,PATH_LIMIT,lastPathID,paths,setPaths);
        setPathCourseID(last_path_id);
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
                onClick={()=>setActive(0)} 
                color="green"/>
                <AnimatedFillButton 
                label="PATHS" 
                customStyle={{width:160,height:60}}
                active={active === 1} 
                onClick={()=>setActive(1)} 
                color="blue"/>
            </div>
            <div className='course-path-container'>
               {active === 0 ? <Courses courses={courses}/>:<Paths paths={paths}/>}
            </div>
            {active === 0 && <LoadMoreButton label="Load More"  onClick={()=>fetchCourse()} hasNext={lastCourseID?true:false}/>}
            {active === 1 && <LoadMoreButton label="Load More"  onClick={()=>fetchPaths()} hasNext={lastPathID?true:false}/>}
               
        </section>
        </>
     );
}
 
export default Course;