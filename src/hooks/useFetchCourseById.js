import axios from "axios";
import { READ_COURSE_URL } from "../config/CONFIG";

async function FetchCourseById(progress) {
    return await axios({
        method:'POST',
        url:READ_COURSE_URL+'/id',
        data:{
            course_ids:progress
        }
    })
}

export default FetchCourseById;