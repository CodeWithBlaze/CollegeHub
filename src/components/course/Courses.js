import React from 'react';
import CourseCard from '../card/CourseCard';
function Courses({courses=[],userProgress=[],searchResult=[]}) {
    return (
        <div className='course-card-container'>
                        {
                            searchResult.length !== 0 &&  searchResult.map(course=><CourseCard
                                isUserEnrolled={userProgress.includes(course._id)} 
                                key={course._id} 
                                id={course._id}
                                image = {course.image}
                                coverImage={course.coverImage}
                                heading={course.title}
                                description = {course.description}
                                
                                /> )
                        }
                    
                        {
                            searchResult.length === 0 &&  courses.map(course=><CourseCard
                                isUserEnrolled={userProgress.includes(course._id)} 
                                key={course._id} 
                                id={course._id}
                                image = {course.image}
                                coverImage={course.coverImage}
                                heading={course.title}
                                description = {course.description}
                                
                                /> )
                        }
                        
        </div>
    );
}

export default Courses;
