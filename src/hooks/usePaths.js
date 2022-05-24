import axios from 'axios';
import { useEffect, useState } from 'react';

function usePaths(limit='',lastId='') {
    const [paths,setPaths] = useState([]);
    
    useEffect(()=>{
        async function getPathsFromDatabase(){
            let url = 'http://localhost:5000/path';
            if(lastId)
                url+=`?lastId=${lastId}`;
            if(limit)
                url+=`?limit=${limit}`;
            axios.get(url).then(res=>setPaths(res.data))
        }
        getPathsFromDatabase();
    },[limit,lastId])
    return {paths,setPaths};
}

export default usePaths;