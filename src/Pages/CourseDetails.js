import React from 'react';
import './course_details.css';
import Navbar from '../components/navbar/Navbar';
import CourseCurriculum from '../components/course/CourseCurriculum';
import CourseSyllabus from '../components/course/CourseSyllabus';
import { useLocation } from 'react-router-dom';
import getCourseTopicById from '../database/sample_courseTopic';


function CourseDetails(props) {
    const location = useLocation()
    const {course_objective,course_outcome,topics} = getCourseTopicById(location.state.id);
    return (
        <>
        <Navbar bg_color='rgba(0, 0, 0, 0.48)'/>
        <div className='course-deatils-container'>
            <div className='course-details-image-container'>
                 <img src="https://mytechdecisions.com/wp-content/uploads/2018/08/Hacker_computer_cyber_security.jpg"/>
            </div>
            <CourseCurriculum course_objective={course_objective} course_outcome={course_outcome} course_title={location.state.title}/>
            <CourseSyllabus  topics={topics}/>
            
        </div>
        </>
        
    );
}

export default CourseDetails;