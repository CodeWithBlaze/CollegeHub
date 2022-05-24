import axios from "axios";
import updateURL from "../utils/updateUrl";

export default async function FetchData(url,limit,last_id,previousData,update){
    url = updateURL(url,limit,last_id);
    const result = await axios.get(url);
    update([...previousData,...result.data]);
    const lastDocumentID = result.data.length !==0 ? result.data[result.data.length - 1]._id:null;
    return lastDocumentID;
}