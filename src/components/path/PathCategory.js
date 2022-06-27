import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CourseCard from '../card/CourseCard';
import './path_category.css';

function PathCategory({category}) {
    const [currentCourses,setCurrentCourses] = useState([]);
    useEffect(()=>{
        function setCourseArray(){
            axios({
                method:'POST',
                url:'http://localhost:5000/course/id',
                data:{
                    course_ids:category.course_ids
                }
            })
            .then(res=>setCurrentCourses(res.data))
            .catch(err=>console.log(err))
        }
        setCourseArray();
    },[])
    return (
        <div className='path-category-container'>
             <h1>{category.title}</h1>
             <p className='path-category-description'>{category.description}</p>
             <div className='path-courses'>
                        {
                            currentCourses.map(course=><CourseCard 
                                key={course._id} 
                                id={course._id}
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