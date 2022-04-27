import { Link } from 'react-router-dom';
import GradientButton from '../buttons/Gradient';
import OutlineButton from '../buttons/Outline';

import './navbar.css';

const Navbar = ({bg_color='black'}) => {
    return ( 
        <div className="navbar-container" style={{backgroundColor:bg_color}}>
            <Link to="/" style={{textDecoration:'none'}}><h2>CollegeHub</h2></Link>
            <ul>
                <Link to="/course" style={{textDecoration:'none'}}><li>Courses</li></Link>
                <Link to="/topic" style={{textDecoration:'none'}}><li>Topic</li></Link>
                <Link to="/contact" style={{textDecoration:'none'}}><li>Contact</li></Link>
            </ul>
            <span>
                 <Link style={{textDecoration:'none'}} to="/signup"><OutlineButton label="Log in" width={130} height={40} color="white" fontsize={15}/></Link>
                 <Link style={{textDecoration:'none'}} to="/signin"><GradientButton label="Sign up" width={130} height={40} color="white" fontsize={15}/></Link>
            </span>
           
        </div>
     );
}
 
export default Navbar;