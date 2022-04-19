import './outline.css';
const OutlineButton = ({label,width,height,fontsize,color}) => {
    return ( 
        <button className="btn-outline" style={{width,height,fontSize:fontsize,borderColor:color,color}}>
            {label}
        </button>
     );
}
 
export default OutlineButton;