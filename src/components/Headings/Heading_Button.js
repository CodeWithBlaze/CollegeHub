import OutlineButton from "../buttons/Outline";
import './heading_button.css';
const Heading_Button = ({text,label,customStyle}) => {
    return ( 
        <div className="heading_button_container" style={customStyle}>
            <h1>{text}</h1>
            <OutlineButton label={label} width={120} height={40} fontsize={13} color="white"/>
        </div>
     );
}
 
export default Heading_Button;