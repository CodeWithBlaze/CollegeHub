import Navbar from '../components/navbar/Navbar';
import './signup.css';
import Card from '../components/card/Card';
const Signup = () => {
    return ( 
        <div className="signup-container">
            <Navbar bg_color='transparent'/>
            <div className="signup-container">
                <div className='signup-text-container'>
                    <h2>Everything is free <br/>forever .</h2>
                    <img src={require('../asset/education.png')}/>
                </div>
                <div className='signup-form'>
                    <Card width={400} height={600}>
                        <h3 className='card-text-signup'>
                        Education should <br/>
                        always be free
                        </h3>
                    </Card>
                </div>

            </div>
        </div>
     );
}
 
export default Signup;