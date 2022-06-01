import { useState } from "react";
import GradientButton from "../buttons/Gradient";
import InputBox from "../input/InputBox";
import Loader from "../loaders/Loader";
import LinkText from "../text/LinkText";
import Card from "./Card";
import {signInUser} from '../../firebase/functions/auth';
import { getSuccessToast,getErrorToast } from "../toast/Toast";

const input_box_style = {
    width:'90%',
    height:50,
    marginLeft:10,
    backgroundColor:'rgba(83,83,83,0.5)',
    color:'#8D8D8D',
    fontSize:16
}

const Signin = ({setShowSignUpPage}) => {
    const [password,setPassword] = useState("");
    const [email,setEmail] = useState("");
    const [showLoader,setShowLoader] = useState(false);
    
    function onSignInSuccess(userCredential){
        setShowLoader(false);
        getSuccessToast("SignIn Successfull","BOTTOM_RIGHT")
    }
    function onSignInFail(error){
        setShowLoader(false);
        getErrorToast(error.message,"BOTTOM_RIGHT");
    }
    return ( 
        <Card width={400} height={600}>
                        <h3 className='card-text-signup'>
                        Education should <br/>
                        always be free
                        </h3>
                        <div className='form-input-container' style={{height:'30%'}}>
                        <InputBox 
                        placeholder="Email" 
                        customStyle={input_box_style}
                        type="email"
                        value={email}
                        setValue={setEmail}
                        />
                        <InputBox 
                        placeholder="Password" 
                        customStyle={input_box_style}
                        type="password"
                        value={password}
                        setValue={setPassword}
                        />
                        </div>
                        <div className='signup-form-button-container'>
                            {showLoader && <Loader width={30} height={30} color="blue"/>}
                            <GradientButton 
                            label="Sign in" 
                            width={326}
                            height={50} 
                            fontsize={16}
                            color="white"
                            borderRadius={3}
                            onClick={()=>{setShowLoader(true);signInUser(email,password,onSignInSuccess,onSignInFail)}}
                            />
                            <LinkText customStyle={{fontSize:14,marginTop:20}} onClick={()=>setShowSignUpPage(true)}>
                                Create a new Account.<label style={{color:'#8826D1'}}> Sign up</label>
                            </LinkText>
                        </div>
                    </Card>
     );
}
 
export default Signin;