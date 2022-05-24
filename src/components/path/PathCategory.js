import React, { useEffect, useState } from 'react';
import CourseCard from '../card/CourseCard';
import './path_category.css';

//------------test code ------------
import courses from '../../database/sample_course';
function PathCategory({category}) {
    const [currentCourses,setCurrentCourses] = useState([]);
    //------------test code ------------
    function getCoursesById(id){
        return courses.find(course=>course.id === id)
    }
    useEffect(()=>{
        function setCourseArray(){
            const Pathcourses = []
            category.courses.forEach(courseId => {
                const course = getCoursesById(courseId)
                Pathcourses.push(course); 
            });
            setCurrentCourses(Pathcourses);
        }
        setCourseArray();
    },[])
    //------------test code ------------
    return (
        <div className='path-category-container'>
             <h1>{category.title}</h1>
             <p className='path-category-description'>{category.description}</p>
             <div className='path-courses'>
                        {
                            currentCourses.map(course=><CourseCard 
                                key={course.id} 
                                id={course.id}
                                customStyle={{marginRight:30}}
                                image = {course.image}
                                heading={course.title}
                                description = {course.description}
                                
                                /> )
                        }
            </div>
        </div>
    );
}

export default PathCategory;