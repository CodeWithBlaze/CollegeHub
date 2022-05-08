import React from 'react';
import courses from '../../database/sample_course';
import CourseCard from '../card/CourseCard';

function Courses(props) {
    return (
        <div className='course-card-container'>
                    
                        {
                            courses.map(course=><CourseCard 
                                key={course.id} 
                                id={course.id}
                                customStyle={{marginRight:30}}
                                image = {course.image}
                                heading={course.title}
                                description = {course.description}
                                
                                /> )
                        }
                        
        </div>
    );
}

export default Courses;