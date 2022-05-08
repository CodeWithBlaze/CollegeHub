import React from 'react';
import CourseCurriculum from '../components/course/CourseCurriculum';
import CourseSyllabus from '../components/course/CourseSyllabus';
import { useLocation } from 'react-router-dom';
import getCourseTopicById from '../database/sample_courseTopic';
import TopicContext from '../context/TopicContext';
import BackgroundImage from '../components/backgrounds/BackgroundImage';


function CourseDetails(props) {
    const location = useLocation()
    const {course_objective,course_outcome,topics} = getCourseTopicById(location.state.id);
    
    return (
        <BackgroundImage image={location.state.image}>
            <TopicContext.Provider value={topics}>
                <CourseCurriculum 
                course_objective={course_objective} 
                course_outcome={course_outcome} 
                course_title={location.state.title}/>
                <CourseSyllabus/>
            </TopicContext.Provider>
        </BackgroundImage>
    );
}

export default CourseDetails;