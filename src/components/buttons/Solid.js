import './solid-button.css';
const SolidButton = ({label,width,height,fontsize,bg_color,color}) => {
    return ( 
        <button className='solid-button' style={{width,height,fontSize:fontsize,backgroundColor:bg_color,color}}>
            {label}
        </button>
     );
}
 
export default SolidButton;