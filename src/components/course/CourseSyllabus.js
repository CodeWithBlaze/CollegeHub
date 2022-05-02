import React from 'react';
import GradientBackground from '../backgrounds/GradientBackground';
import GradientButton from '../buttons/Gradient';
import TopicCard from '../card/TopicCard';

import './course_syllabus.css';
function CourseSyllabus({topics}) {
    
    
    return (
        <GradientBackground customStyle={{marginTop:60}}>
            <div className='course-syllabus-container'>
                <h1>Course Curriculum</h1>
                <div>
                    {
                        topics.map(topic=><TopicCard key={topic.id} topic={topic}/>)
                    }
                </div>
                <div className='course-curriculum-btn-container load-more-btn'>
                        <GradientButton label="Enroll Now" width={180} height={60} borderRadius={5} fontsize={15} color="white"/>
                        <label className='course-curriculum-load-more'>Load More</label>
                </div>
            </div>
        </GradientBackground>
    );
}

export default CourseSyllabus;