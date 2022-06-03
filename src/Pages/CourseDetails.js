import React, { useEffect, useState } from 'react';
import CourseCurriculum from '../components/course/CourseCurriculum';
import CourseSyllabus from '../components/course/CourseSyllabus';
import { useLocation } from 'react-router-dom';
import BackgroundImage from '../components/backgrounds/BackgroundImage';
import axios from 'axios';


function CourseDetails(props) {
    const location = useLocation()
    const [courseData,setCourseData]= useState({
        course_objectives:[],
        course_outcomes:[],
        course_topics:[]
    })
    async function getCourseDetails(){
        axios.get(`http://localhost:5000/course/detail/628b4eb2482cd7ad3bd8b972`)
        .then(res=>{
            const {course_objectives,course_outcomes,course_topics} = res.data[0];
            setCourseData({course_objectives,course_outcomes,course_topics})
        })
        .catch(err=>console.log(err))
    }
    useEffect(()=>{
        getCourseDetails()
    },[])
    return (
        <BackgroundImage image={location.state.image}>
            <CourseCurriculum 
                course_id = "628b5326482cd7ad3bd8b97a"
                course_objective={courseData.course_objectives} 
                course_outcome={courseData.course_outcomes} 
                course_title={location.state.title}
            />
            <CourseSyllabus course_id = "628b5326482cd7ad3bd8b97a" topics={courseData.course_topics}/>
            
        </BackgroundImage>
    );
}

export default CourseDetails;