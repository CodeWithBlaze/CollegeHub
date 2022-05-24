import React from 'react';
import CourseCard from '../card/CourseCard';
function Courses({courses=[]}) {
    return (
        <div className='course-card-container'>
                    
                        {
                            courses.map(course=><CourseCard 
                                key={course._id} 
                                id={course._id}
                                customStyle={{marginRight:30,marginBottom:30}}
                                image = {course.image}
                                heading={course.title}
                                description = {course.description}
                                
                                /> )
                        }
                        
        </div>
    );
}

export default Courses;
