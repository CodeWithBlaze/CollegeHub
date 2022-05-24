import React from 'react';
import GradientBackground from '../backgrounds/GradientBackground';
import Courses from '../course/Courses';
import HeadingText from '../Headings/HeadingText';


function DevelopementCourseContainer({beginner_courses}) {
    
    return (
    <GradientBackground>
        <HeadingText label="NEW TO DEVELOPEMENT" 
            subheading="LEARN FROM SCRATCH ALL FOR FREE"
            customContainerStyle={{width:'100%'}} 
            customTextStyle={{textAlign:'center'}}
            customSubheadingStyle={{textAlign:'center'}}
        />
        <div className='home-courses-component-container'>
            <Courses courses={beginner_courses}/>
        </div>
    </GradientBackground>
    );
}

export default DevelopementCourseContainer;