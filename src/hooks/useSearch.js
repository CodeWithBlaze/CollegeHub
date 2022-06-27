import axios from 'axios';

function SearchData(url,query,onDataFetched,onFetchedFailed) {
    axios.get(url+"/"+query)
    .then(res=>onDataFetched(res))
    .catch(err=>onFetchedFailed(err))
}

export default SearchData;