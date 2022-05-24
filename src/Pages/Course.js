import './course.css';
import Navbar from '../components/navbar/Navbar';
import AnimatedFillButton from '../components/buttons/AnimatedFillButton';
import Courses from '../components/course/Courses';
import Paths from '../components/path/Paths';
import { useState } from 'react';
import useCourses from '../hooks/useCourses';
import usePaths from '../hooks/usePaths';

const Course = () => {
    const [active,setActive] = useState(0);
    const {courses} = useCourses();
    const {paths} = usePaths();
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
        </section>
        </>
     );
}
 
export default Course;