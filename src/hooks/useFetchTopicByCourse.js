import axios from "axios";
import { READ_COURSE_URL } from "../config/CONFIG";

async function FetchTopicByCourse(id) {
    return await axios.get(READ_COURSE_URL+"/topic/"+id)
}

export default FetchTopicByCourse;