import React,{useContext} from 'react';
import './course-curriculum.css';
import {Link} from 'react-router-dom';
import GradientBackground from '../backgrounds/GradientBackground';
import GradientButton from '../buttons/Gradient';
import TopicContext from '../../context/TopicContext';
import { TUTORIAL_ROUTE } from '../../config/CONFIG';
function CourseCurriculum({course_objective, course_outcome,course_title}) {
    const topics = useContext(TopicContext);
    return (
        <GradientBackground>
            <div className='course-curriculum-sub-container'>
            <h1>{course_title}</h1>
            <div className='course-learn-outcome-container'>
                <div className='course-learning'>
                    <h2>What you will learn</h2>
                    <ul className='course-curriculum-list'>
                        {
                            course_objective.map(objective=><li key={objective}>{objective}</li>)
                        }
                    </ul>
                    <div className='course-curriculum-btn-container'>
                    <Link to={TUTORIAL_ROUTE} state={{initialTopic:topics[0],TopicList:topics}}><GradientButton label="Enroll Now" width={180} height={60} borderRadius={5} fontsize={15} color="white"/></Link>
                    </div>
                </div>
                <div className='course-outcome'>
                    <h2>Course Outcome</h2>
                    <ul className='course-curriculum-list'>
                        {
                            course_outcome.map(outcome=><li key={outcome}>{outcome}</li>)
                        }
                    </ul>
                </div>
            </div>
            
            
            </div>
        </GradientBackground>
    );
}

export default CourseCurriculum;