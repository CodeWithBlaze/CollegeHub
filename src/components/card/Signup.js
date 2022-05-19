import { useState } from "react";
import { registerUser } from "../../firebase/functions/auth";
import GradientButton from "../buttons/Gradient";
import InputBox from "../input/InputBox";
import Loader from "../loaders/Loader";
import LinkText from "../text/LinkText";
import {getSuccessToast,getErrorToast} from '../toast/Toast';
import Card from "./Card";

const input_box_style = {
    width:'90%',
    height:50,
    marginLeft:10,
    backgroundColor:'rgba(83,83,83,0.5)',
    color:'#8D8D8D',
    fontSize:16
}

const Signup = ({setShowSignUpPage}) => {
    const [password,setPassword] = useState("");
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [showLoader,setShowLoader] = useState(false);

    function onSignUpSucess(userCredential){
        setShowLoader(false);
        getSuccessToast("Sign up Successfull","BOTTOM_RIGHT")
    }
    function onSignUpFailed(error){
        setShowLoader(false);
        console.log(error.message);
        getErrorToast("Sign In Failed","BOTTOM_RIGHT")
    }
    return ( 
        <Card width={400} height={600}>
                        <h3 className='card-text-signup'>
                        Education should <br/>
                        always be free
                        </h3>
                        <div className='form-input-container'>
                           <InputBox 
                        placeholder="Name" 
                        customStyle={input_box_style}
                        type="text"
                        value={name}
                        setValue={setName}
                        />
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
                            label="Register Account" 
                            width={326}
                            height={50} 
                            fontsize={16}
                            color="white"
                            borderRadius={3}
                            onClick={()=>{setShowLoader(true);registerUser(email,password,onSignUpSucess,onSignUpFailed)}}
                            />
                            <LinkText customStyle={{fontSize:14,marginTop:20}} onClick={()=>setShowSignUpPage(false)}>
                                Already have a account.<label style={{color:'#8826D1'}}> Sign In.</label>
                            </LinkText>
                        </div>
                    </Card>
     );
}
 
export default Signup;