import './card_photo.css';
const CardPhoto = ({photo,width_outer=230,width_inner=170}) => {
    return ( 
        <div className="outer-circle" style={{width:width_outer,height:width_outer}}>
            <div className="inner-circle" style={{width:width_inner,height:width_inner}}>
                <img src={require(`../../asset/${photo}`)} className="card-photo"/>
            </div>
        </div>
     );
}
 
export default CardPhoto;