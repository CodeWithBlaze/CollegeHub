import axios from "axios"
import { READ_TOPIC_URL, READ_USER_TOPIC_PROGRESS } from "../config/CONFIG"
import { addUserTokenInHeader } from "./useUserToken"


async function TopicCompleted(course_id,topic_id){
    return await axios({
        method:'PUT',
        url:READ_TOPIC_URL+'/complete',
        headers:{
            ...addUserTokenInHeader()
        },
        data:{
            course_id:course_id,
            topic_id:topic_id,
        }
    })
}
async function GetTopicCompleted(course_id){
    return await axios({
        method:'GET',
        url:READ_USER_TOPIC_PROGRESS,
        headers:{
            ...addUserTokenInHeader(),
            course_id:course_id
        }
    })
}
export {TopicCompleted,GetTopicCompleted}