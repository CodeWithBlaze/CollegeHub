import axios from 'axios';
import { useEffect, useState } from 'react';

function useCourses(limit='',lastId='',category) {
    const [coursesCategory,setCoursesCategory] = useState([]);
    
    useEffect(()=>{
        async function getCoursesFromDatabase(){
            let url = `http://localhost:5000/course/${category}`;
            if(lastId)
                url+=`?lastId=${lastId}`;
            if(limit)
                url+=`?limit=${limit}`;
            axios.get(url).then(res=>setCoursesCategory(res.data))
        }
        getCoursesFromDatabase();
    },[limit,lastId,category])
    return {coursesCategory,setCoursesCategory};
}

export default useCourses;