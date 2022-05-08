import React from 'react';
import { AVAILABLE_COURSES } from '../../config/HOMEPAGE_HARDCODED';
import GradientBackground from '../backgrounds/GradientBackground';
import Dropdown from '../dropdown/Dropdown';

function AvailableCourses(props) {
    return (
    <GradientBackground>
        <div className="course-container">
            <h1>Course Available</h1>
            <div className="course-dropdown-container">
                {
                    AVAILABLE_COURSES.map(course=><Dropdown label={course.label} syllabus={course.syllabus}/>)
                }
            </div>
        </div>
    </GradientBackground>
    );
}

export default AvailableCourses;