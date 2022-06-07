import React from 'react';
import CourseCard from '../card/CourseCard';
function Courses({courses=[],userProgress=[]}) {
    return (
        <div className='course-card-container'>
                    
                        {
                            courses.map(course=><CourseCard
                                isUserEnrolled={userProgress.includes(course._id)} 
                                key={course._id} 
                                id={course._id}
                                image = {course.image}
                                heading={course.title}
                                description = {course.description}
                                
                                /> )
                        }
                        
        </div>
    );
}

export default Courses;
