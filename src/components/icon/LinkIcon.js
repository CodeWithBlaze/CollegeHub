import { Link } from "react-router-dom";
function isExternalLink(link){
    return link.startsWith("https://") || link.startsWith("http://")
}

const LinkIcon = ({link,name,size,color,marginLeft,marginRight}) => {
    if(isExternalLink)
        return <a href={link}><i className={`${name} ${size}`} style={{color,marginLeft,marginRight}}></i></a>
    else
        return <Link to={link}><i className={`${name} ${size}`} style={{color,marginLeft,marginRight}}></i></Link>
}
 
export default LinkIcon;