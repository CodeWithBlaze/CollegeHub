import { Link } from "react-router-dom";


const TagCard = ({backgroundColor,color="white",label,marginRight=0,fontSize,width=null,height=null}) => {
    if(!backgroundColor){
        const colorArray = ["#8826D1","#D8A232","#3756F4"]
        backgroundColor = colorArray[Math.floor(Math.random() * colorArray.length)];
    }
    return ( 
        <Link to="/" style={{textDecoration:'none'}}>
        <div style={{backgroundColor,color,display:'flex',justifyContent:'center',alignItems:'center',width:width?width:'fit-content',height:height?height:'fit-content',padding:20,borderRadius:5,marginRight}} >
            <h3 style={{margin:0,fontWeight:500,fontSize}}>{label}</h3>
        </div>
        </Link>
        
     );
}
 
export default TagCard;