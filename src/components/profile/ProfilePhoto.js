import { Link } from 'react-router-dom';
import { CONTACT_ROUTE } from '../../config/CONFIG';
import './profile.css';
const ProfilePhoto = ({width,image}) => {
    return (
        <Link to={CONTACT_ROUTE}>
            <span class="outer-circle-review" style={{width,height:width}}>
                <span class="inner-circle-review" style={{width:width-5,height:width-5}}>
                    <img src={require(`../../asset/${image}`)} style={{width:width-5}} className="review-image"/>
                </span>

            </span>
        </Link> 
     );
}
 
export default ProfilePhoto;
