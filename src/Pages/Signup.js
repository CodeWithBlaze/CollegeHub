import Navbar from '../components/navbar/Navbar';
import './signup.css';
import SignUp from '../components/card/Signup';
import Signin from '../components/card/Signin';
import { useState } from 'react';


const Signup = ({showSignUp=true}) => {
    const [showSignUpPage,setShowSignUpPage] = useState(showSignUp);
    console.log(showSignUpPage);
    return ( 
        <div className="signup-container">
            <Navbar bg_color='transparent'/>
            <div className="signup-container">
                <div className='signup-text-container'>
                    <h2>Everything is free <br/>forever .</h2>
                    <img src={require('../asset/education.png')}/>
                </div>
                <div className='signup-form'>
                    {showSignUpPage && <SignUp  setShowSignUpPage={setShowSignUpPage}/>}
                    {!showSignUpPage && <Signin  setShowSignUpPage={setShowSignUpPage}/>}
                </div>

            </div>
        </div>
     );
}
 
export default Signup;