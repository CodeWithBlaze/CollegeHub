import axios from "axios";
import { READ_TOPIC_URL } from "../config/CONFIG";

async function FetchTopicById(topic_id) {
    return await axios({
        method:'POST',
        url:READ_TOPIC_URL+'/id',
        data:{
            topic_ids:topic_id
        }
    })
}

export default FetchTopicById;