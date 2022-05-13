import './gradient.css';
const GradientButton = ({label,width,height,fontsize,color,borderRadius=30,marginBottom=0,onClick}) => {
    return ( 
        <button className="btn-solid" onClick={onClick} style={{
            width,
            height,
            fontSize:fontsize,
            color,
            borderRadius,
            marginBottom,
        }}>{label}</button>
     );
}
 
export default GradientButton;