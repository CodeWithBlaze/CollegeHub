import axios from 'axios';
import { useEffect, useState } from 'react';

function useTopics(limit='',lastId='') {
    const [topics,setTopics] = useState([]);
    
    useEffect(()=>{
        async function getCoursesFromDatabase(){
            let url = 'http://localhost:5000/topic';
            if(lastId)
                url+=`?lastId=${lastId}`;
            if(limit)
                url+=`?limit=${limit}`;
            axios.get(url).then(res=>setTopics(res.data))
        }
        getCoursesFromDatabase();
    },[lastId,limit])
    return {topics,setTopics};
}

export default useTopics;