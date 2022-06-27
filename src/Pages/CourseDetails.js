import React, { useEffect, useState } from 'react';
import CourseCurriculum from '../components/course/CourseCurriculum';
import CourseSyllabus from '../components/course/CourseSyllabus';
import { useLocation } from 'react-router-dom';
import BackgroundImage from '../components/backgrounds/BackgroundImage';
import axios from 'axios';


function CourseDetails(props) {
    const course_id = '62a236d7ee6e1972ef048f92'
    const location = useLocation()
    const [courseData,setCourseData]= useState({
        course_objectives:[],
        course_outcomes:[],
        course_topics:[],
    })
    const [topic_ids,setTopicIds] = useState([])
    async function getCourseDetails(){
        axios.get(`http://localhost:5000/course/detail/${course_id}`)
        .then(res=>{
            const {course_objectives,course_outcomes,course_topics} = res.data[0];
            setCourseData({course_objectives,course_outcomes,course_topics:course_topics})
            const topicIdsOnly = []
            course_topics.forEach(topic=>topicIdsOnly.push(topic._id))
            console.log(topicIdsOnly)
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
                course_id = "62a236d7ee6e1972ef048f92"
                course_objective={courseData.course_objectives} 
                course_outcome={courseData.course_outcomes} 
                course_title={location.state.title}
                topics={topic_ids}
            />
            <CourseSyllabus 
            course_id = "62a236d7ee6e1972ef048f92" 
            topics={topic_ids} 
            showTopics={courseData.course_topics}
            />
            
        </BackgroundImage>
    );
}

export default CourseDetails;