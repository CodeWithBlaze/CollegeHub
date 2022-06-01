import { Link } from 'react-router-dom';
import GradientButton from '../buttons/Gradient';
import OutlineButton from '../buttons/Outline';
import logo from '../../asset/logo.svg';
import UserAuthContext from '../../context/UserAuthContext';
import { useContext } from 'react';
import { CONTACT_ROUTE, COURSE_ROUTE, HOME_ROUTE, PROFILE_ROUTE, SIGNIN_ROUTE, SIGNUP_ROUTE, TOPIC_ROUTE } from '../../config/CONFIG';

import './navbar.css';
import { signOutUser } from '../../firebase/functions/auth';

const Navbar = ({bg_color='black'}) => {
    const {auth} = useContext(UserAuthContext);
    
    return ( 
        <div className="navbar-container" style={{backgroundColor:bg_color}}>
            <Link to={HOME_ROUTE} style={{textDecoration:'none'}}><img className='navbar-logo' src={logo} alt="logo"/></Link>
            <ul>
                <Link to={COURSE_ROUTE} style={{textDecoration:'none'}}><li>Courses</li></Link>
                <Link to={TOPIC_ROUTE} style={{textDecoration:'none'}}><li>Topic</li></Link>
                <Link to={CONTACT_ROUTE} style={{textDecoration:'none'}}><li>Contact</li></Link>
            </ul>
            <span>
                {!auth && <Link style={{textDecoration:'none'}} to={SIGNIN_ROUTE}><OutlineButton label="Log in" width={130} height={40} color="white" fontsize={15}/></Link>}
                {!auth && <Link style={{textDecoration:'none'}} to={SIGNUP_ROUTE}><GradientButton label="Sign up" width={130} height={40} color="white" fontsize={15}/></Link>} 
                {auth && <Link style={{textDecoration:'none'}} to={PROFILE_ROUTE}><label className='profile-user-email'>{auth.email}</label></Link>}
                {auth && <GradientButton label="Log Out" width={130} height={40} color="white" fontsize={15} onClick={()=>signOutUser()}/>}
            </span>
           
        </div>
     );
}
 
export default Navbar;