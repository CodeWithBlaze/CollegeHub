import React from 'react';
import './course-curriculum.css';
import GradientBackground from '../backgrounds/GradientBackground';
import GradientButton from '../buttons/Gradient';
function CourseCurriculum(props) {
    return (
        <GradientBackground>
            <div className='course-curriculum-sub-container'>
            <h1>The Ultimate Networking Course</h1>
            <div className='course-learn-outcome-container'>
                <div className='course-learning'>
                    <h2>What you will learn</h2>
                    <ul className='course-curriculum-list'>
                        <li>Hub, Switch, Routers</li>
                        <li>OSI model, TCP/IP model</li>
                        <li>Packert Tracers by Cisco</li>
                    </ul>
                    <div className='course-curriculum-btn-container'>
                        <GradientButton label="Enroll Now" width={180} height={60} borderRadius={5} fontsize={15} color="white"/>
                    </div>
                </div>
                <div className='course-outcome'>
                    <h2>Course Outcome</h2>
                    <ul className='course-curriculum-list'>
                        <li>Hub, Switch, Routers</li>
                        <li>OSI model, TCP/IP model</li>
                        <li>Packert Tracers by Cisco</li>
                    </ul>
                </div>
            </div>
            
            
            </div>
        </GradientBackground>
    );
}

export default CourseCurriculum;