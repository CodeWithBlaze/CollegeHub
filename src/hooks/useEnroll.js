import axios from "axios";
import { UPDATE_ENROLL_IN_COURSE } from "../config/CONFIG";
import { getAuthState } from "../firebase/functions/auth";
import { addUserTokenInHeader } from "./useUserToken";

export default function getUserEnrolled(course_id){
    if(!getAuthState())
        return;
    axios({
        method:'PUT',
        url:UPDATE_ENROLL_IN_COURSE,
        headers:{
            ...addUserTokenInHeader(),
        },
        data:{
            course_id:course_id
        }
    })
    .then(()=>{
        console.log("course added to the curriculum ")
    })
    .catch((err)=>console.log("Something went wrong",err ))
}