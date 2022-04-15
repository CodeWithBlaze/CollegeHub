import './gradient.css';
const GradientButton = ({label,width,height,fontsize,gradient_color1,gradient_color2,color}) => {
    return ( 
        <button className="btn-solid" style={{
            width,
            height,
            fontSize:fontsize,
            color,
        }}>{label}</button>
     );
}
 
export default GradientButton;