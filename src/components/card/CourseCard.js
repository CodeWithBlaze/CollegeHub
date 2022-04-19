import { Link } from 'react-router-dom';
import GradientButton from '../buttons/Gradient';
import './course_Card.css';

const CourseCard = ({image,heading,description,customStyle}) => {
    return ( 
        <div className='course-card-main' style={customStyle}>
            <div className='course-card-details'>
                <img src={image}/>
                <div>
                    <h3>{heading}</h3>
                    <p>{description}</p>
                    <Link to="/"><p style={{color:'#8826D1'}}>Show Syllabus</p></Link>
                    <GradientButton width="100%" height={50} fontsize={15} label="Enroll Now" color="white" borderRadius={5}/>
                </div>
                
            </div>
        </div>
            
        
     );
}
 
export default CourseCard;