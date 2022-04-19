import { Link } from "react-router-dom";


const TagCard = ({backgroundColor,color="white",label,marginRight=0}) => {
    if(!backgroundColor){
        const colorArray = ["#8826D1","#D8A232","#3756F4"]
        backgroundColor = colorArray[Math.floor(Math.random() * colorArray.length)];
    }
    return ( 
        <Link to="/" style={{textDecoration:'none'}}>
        <div style={{backgroundColor,color,display:'flex',justifyContent:'center',minWidth:200,alignItems:'center',width:'fit-content',height:'fit-content',padding:20,borderRadius:5,marginRight}} >
            <h3 style={{margin:0,fontWeight:500}}>{label}</h3>
        </div>
        </Link>
        
     );
}
 
export default TagCard;