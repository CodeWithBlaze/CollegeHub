import './info_card.css';
const ImageInfo = ({rev=false,heading,description,image}) => {
    return ( 
        <div className="site-info-container" style={{flexDirection:rev?"row-reverse":"row"}}>
                    <div className="site-info">
                        <h1>{heading}</h1>
                        <p>{description}</p>
                    </div>
                    <div className="site-image">
                        <img src={image}/>
                    </div>
        </div>
     );
}
 
export default ImageInfo;