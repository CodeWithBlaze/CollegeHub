import React from 'react';
import './course-curriculum.css';
import {Link} from 'react-router-dom';
import GradientBackground from '../backgrounds/GradientBackground';
import GradientButton from '../buttons/Gradient';
import { TUTORIAL_ROUTE } from '../../config/CONFIG';
import getUserEnrolled from '../../hooks/useEnroll';
function CourseCurriculum({course_id,course_objective, course_outcome,course_title,topics}) {
    return (
        <GradientBackground>
            <div className='course-curriculum-sub-container'>
            <h1>{course_title}</h1>
            <div className='course-learn-outcome-container'>
                <div className='course-learning'>
                    <h2>What you will learn</h2>
                    <ul className='course-curriculum-list'>
                        {
                            course_objective.map(objective=><li key={objective}>🔥 {objective}</li>)
                        }
                    </ul>
                    <div className='course-curriculum-btn-container'>
                    <Link to={TUTORIAL_ROUTE} state={{topic_id:topics,course_id}}><GradientButton label="Enroll Now" width={180} height={60} borderRadius={5} fontsize={15} color="white" onClick={()=>getUserEnrolled(course_id)}/></Link>
                    </div>
                </div>
                <div className='course-outcome'>
                    <h2>Course Outcome</h2>
                    <ul className='course-curriculum-list'>
                        {
                            course_outcome.map(outcome=><li key={outcome}>✨ {outcome}</li>)
                        }
                    </ul>
                </div>
            </div>
            
            
            </div>
        </GradientBackground>
    );
}

export default CourseCurriculum;