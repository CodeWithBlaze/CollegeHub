import axios from "axios";
import { READ_USER_PROGRESS_URL } from "../config/CONFIG";
import { addUserTokenInHeader } from "./useUserToken";

export function getUserProgress(update){
    axios({
        method:'GET',
        url:READ_USER_PROGRESS_URL,
        headers:{
            ...addUserTokenInHeader()
        }
    })
    .then(res=>{
        update(res.data);
    })
}