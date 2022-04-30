import React from 'react';
import './course_details.css';
import Navbar from '../components/navbar/Navbar';
import CourseCurriculum from '../components/course/CourseCurriculum';
import CourseSyllabus from '../components/course/CourseSyllabus';


function CourseDetails(props) {
    return (
        <>
        <Navbar bg_color='rgba(0, 0, 0, 0.48)'/>
        <div className='course-deatils-container'>
            <div className='course-details-image-container'>
                 <img src="https://mytechdecisions.com/wp-content/uploads/2018/08/Hacker_computer_cyber_security.jpg"/>
            </div>
            <CourseCurriculum/>
            <CourseSyllabus/>
            
        </div>
        </>
        
    );
}

export default CourseDetails;