import axios from "axios";
import { READ_USER_PROGRESS_URL } from "../config/CONFIG";

export function getUserProgress(update){
    axios.get(READ_USER_PROGRESS_URL).then(res=>{
        console.log(res.data)
        update(res.data);
    })
}