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
        course_topics:[],
    })
    const [topic_ids,setTopicIds] = useState([])
    async function getCourseDetails(){
        axios.get(`http://localhost:5000/course/detail/${location.state.id}`)
        .then(res=>{
            const {course_objectives,course_outcomes,course_topics} = res.data[0];
            setCourseData({course_objectives,course_outcomes,course_topics:course_topics})
            const topicIdsOnly = []
            course_topics.forEach(topic=>topicIdsOnly.push(topic._id))
            setTopicIds(topicIdsOnly);
        })
        .catch(err=>console.log(err))
    }
    useEffect(()=>{
        getCourseDetails()
    },[])
    return (
        <BackgroundImage image={location.state.image}>
            <CourseCurriculum 
                course_id = {location.state.id}
                course_objective={courseData.course_objectives} 
                course_outcome={courseData.course_outcomes} 
                course_title={location.state.title}
                topics={topic_ids}
            />
            <CourseSyllabus 
            course_id = {location.state.id}
            topics={topic_ids} 
            showTopics={courseData.course_topics}
            />
            
        </BackgroundImage>
    );
}

export default CourseDetails;