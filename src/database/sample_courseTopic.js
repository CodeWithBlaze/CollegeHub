import topics from "./sample_topic"
const courseTopic = {
    '628b5326482cd7ad3bd8b97a':{
        course_topics:[1,3,5],
        course_objective:['Hub, Switch, Routers','OSI model, TCP/IP model','Packert Tracers by Cisco'],
        course_outcome:['Hub, Switch, Routers','OSI model, TCP/IP model','Packert Tracers by Cisco']
    },
    2:{
        course_topics:[2,3],
        course_objective:['Hub, Switch, Routers','OSI model, TCP/IP model','Packert Tracers by Cisco'],
        course_outcome:['Hub, Switch, Routers','OSI model, TCP/IP model','Packert Tracers by Cisco']
    },
    3:{
        course_topics:[1,2,4],
        course_objective:['Hub, Switch, Routers','OSI model, TCP/IP model','Packert Tracers by Cisco'],
        course_outcome:['Hub, Switch, Routers','OSI model, TCP/IP model','Packert Tracers by Cisco']
    }
}
export default function getCourseTopicById(course_id){
    const courseDetails = {};
    const videos = []
    if(course_id in courseTopic){
        const ids = courseTopic[course_id].course_topics;
        courseDetails['course_objective'] = courseTopic[course_id].course_objective;
        courseDetails['course_outcome'] = courseTopic[course_id].course_outcome;
        for(let topic in topics){
            topic = topics[topic]
            for(let id in ids)
                if(topic.id === ids[id])
                    videos.push(topic);
        }   
    }
    courseDetails['topics'] = videos;
    return courseDetails;
    

}