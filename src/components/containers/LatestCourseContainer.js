import React from 'react';
import GradientBackground from '../backgrounds/GradientBackground';
import Courses from '../course/Courses';
import HeadingText from '../Headings/HeadingText';

function LatestCourseContainer({latest_courses,userProgress}) {
    
    return (
        <GradientBackground>
            <HeadingText label="LATEST COURSES" 
            subheading="BRAND NEW COURSES EVERYTHING FOR FREE"
            customContainerStyle={{width:'100%'}} 
            customTextStyle={{textAlign:'center'}}
            customSubheadingStyle={{textAlign:'center'}}
            />
        <div className="home-courses-component-container">
            <Courses courses={latest_courses} userProgress={userProgress}/>
        </div>
        
    </GradientBackground>
    );
}

export default LatestCourseContainer;