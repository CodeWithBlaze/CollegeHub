import axios from 'axios';
import { useEffect, useState } from 'react';

function useCourses(limit='',lastId='') {
    const [courses,setCourses] = useState([]);
    
    useEffect(()=>{
        async function getCoursesFromDatabase(){
            let url = 'http://localhost:5000/course';
            if(lastId)
                url+=`?lastId=${lastId}`;
            if(limit)
                url+=`?limit=${limit}`;
            axios.get(url).then(res=>setCourses(res.data))
        }
        getCoursesFromDatabase();
    },[limit,lastId])
    return {courses,setCourses};
}

export default useCourses;