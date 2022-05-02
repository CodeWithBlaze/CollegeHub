import { Link } from 'react-router-dom';
import GradientButton from '../buttons/Gradient';
import './course_Card.css';

const CourseCard = ({image,heading,description,customStyle,id}) => {
    return ( 
        <div className='course-card-main' style={customStyle}>
            <div className='course-card-details'>
                <img src={image}/>
                <div>
                    <h3>{heading}</h3>
                    <p>{description}</p>
                    <Link to="/coursedetails" state={{id,title:heading}} style={{textDecoration:'none',marginTop:80}}><GradientButton width="100%" height={50} fontsize={15} label="Enroll Now" color="white" borderRadius={5}/></Link>
                </div>
                
            </div>
        </div>
            
        
     );
}
 
export default CourseCard;