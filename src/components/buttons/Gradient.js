import './gradient.css';
const GradientButton = ({label,width,height,fontsize,color,borderRadius=30}) => {
    return ( 
        <button className="btn-solid" style={{
            width,
            height,
            fontSize:fontsize,
            color,
            borderRadius
        }}>{label}</button>
     );
}
 
export default GradientButton;