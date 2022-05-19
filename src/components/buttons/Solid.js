const SolidButton = ({label,width,height,fontsize,bg_color,color}) => {
    return ( 
        <button style={{width,height,fontSize:fontsize,backgroundColor:bg_color,color,borderRadius:5,border:'none',cursor:'pointer',fontFamily:`var(--secondary-font)`}}>
            {label}
        </button>
     );
}
 
export default SolidButton;