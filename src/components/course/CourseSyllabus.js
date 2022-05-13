import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import TopicContext from '../../context/TopicContext';
import GradientBackground from '../backgrounds/GradientBackground';
import GradientButton from '../buttons/Gradient';
import TopicCard from '../card/TopicCard';
import {TUTORIAL_ROUTE} from '../../config/CONFIG';
import './course_syllabus.css';
function CourseSyllabus() {
    const topics = useContext(TopicContext);
    return (
        <GradientBackground customStyle={{marginTop:60}}>
            <div className='course-syllabus-container'>
                <h1>Course Curriculum</h1>
                <div>
                    {
                        topics.map(topic=><TopicCard link={TUTORIAL_ROUTE} key={topic.id} topic={topic}/>)
                    }
                </div>
                <div className='course-curriculum-btn-container load-more-btn'>
                        <Link to={TUTORIAL_ROUTE} state={{initialTopic:topics[0],TopicList:topics}}><GradientButton label="Enroll Now" width={180} height={60} borderRadius={5} fontsize={15} color="white"/></Link>
                        <label className='course-curriculum-load-more'>Load More</label>
                </div>
            </div>
        </GradientBackground>
    );
}

export default CourseSyllabus;