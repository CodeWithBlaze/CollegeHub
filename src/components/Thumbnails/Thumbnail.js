import { Link } from 'react-router-dom';
import { PATH_DETAILS_ROUTE } from '../../config/CONFIG';
import './thumbnail.css';

const Thubnail = ({image,customStyle,label,categories}) => {
    return (
        <Link style={{textDecoration:'none'}} to={PATH_DETAILS_ROUTE} state={{image,label,categories}}>
        <div className="thumbnail-container" style={customStyle}>
            <img src={image} style={{width:customStyle.width,height:customStyle.height,objectFit:'cover'}}/>
            <div className="thumbnail-title" style={{top:-customStyle.height-4}}>
                {label && <h2>{label}</h2>}
            </div>
        </div>
        </Link> 
        
     );
}
 
export default Thubnail;