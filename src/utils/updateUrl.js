export default function updateURL(url,limit,lastId){
    if(limit && lastId)
        url+=`?lastId=${lastId}&limit=${limit}`;
    else if(lastId)
        url+=`?lastId=${lastId}`;
    else if(limit)
        url+=`?limit=${limit}`;
    console.log(url)
    return url 
}