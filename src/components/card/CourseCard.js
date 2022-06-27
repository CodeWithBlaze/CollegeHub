import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { COURSE_DETAILS_ROUTE, TUTORIAL_ROUTE } from '../../config/CONFIG';
import FetchTopicByCourse from '../../hooks/useFetchTopicByCourse';
import GradientButton from '../buttons/Gradient';
import './course_Card.css';
const CourseCard = ({image,heading,description,customStyle,id,isUserEnrolled}) => {
    const [topics,setTopics] = useState([])
    useEffect(()=>{
        if(isUserEnrolled)
            FetchTopicByCourse(id)
            .then(res=>setTopics(res.data[0].course_topics))
            .catch(err=>console.log(err))
        
    },[isUserEnrolled])
    return ( 
        <div className='course-card-main' style={customStyle}>
            <div className='course-card-details'>
                <img src={image} alt="card"/>
                <div>
                    <h3>{heading}</h3>
                    <p>{description}</p>
                    {
                    !isUserEnrolled ? 
                    <Link to={COURSE_DETAILS_ROUTE} state={{id,title:heading,image}} style={{textDecoration:'none',marginTop:80}}><GradientButton width="100%" height={50} fontsize={15} label="Enroll Now" color="white" borderRadius={5}/></Link>
                    :
                    topics.length>0? <Link to={TUTORIAL_ROUTE} state={{topic_id:topics}} style={{textDecoration:'none',marginTop:80}}><GradientButton width="100%" height={50} fontsize={15} label="Go to Course" color="white" borderRadius={5}/></Link>
                    :
                    <GradientButton width="100%" height={50} fontsize={15} label="Loading" color="white" borderRadius={5}/>
                    }
                </div>
                
            </div>
        </div>
            
        
     );
}
 
export default CourseCard;