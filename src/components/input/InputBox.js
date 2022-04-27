import './inputbox.css';
import {useState} from 'react';
const InputBox = ({placeholder,type,customStyle,value,setValue}) => {
    const [showPassword,setShowPassword] = useState(false);
    function getType(){
        if(type=='password' && !showPassword)
            return "password"
        return "text"
    }
    
    return (
        <div>
            <input 
            style={customStyle} 
            type={getType()} 
            placeholder={placeholder} 
            value={value}
            onChange={(value)=>setValue(value.target.value)}
            className="input-box"/>
            <br/>
            {
                type == "password" && 
                <i className={showPassword?"fa-solid fa-eye-slash":"fa-solid fa-eye password-eye-icon"}
                onClick={()=>setShowPassword(!showPassword)} 
                style={{
                color:customStyle.color?customStyle.color:"white",
                position:'relative',
                left:`calc(${customStyle.width} - 30px)`,
                bottom:0.5*customStyle.height,
                transform: "translateY(-50%)"
                }}></i>
            }
            
        </div> 
        
     );
}
 
export default InputBox;