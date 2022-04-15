import { Link } from 'react-router-dom';
import './profile.css';
const ProfilePhoto = ({width,image}) => {
    return (
        <Link to="/contact">
            <span class="outer-circle-review" style={{width,height:width}}>
                <span class="inner-circle-review" style={{width:width-5,height:width-5}}>
                    <img src={require(`../../asset/${image}`)} style={{width:width-5}} className="review-image"/>
                </span>

            </span>
        </Link> 
     );
}
 
export default ProfilePhoto;
