import './card_text.css';
const CardText = ({heading,subheading}) => {
    return ( 
        <div className="card-text">
            <h3>{heading}</h3>
            <p>{subheading}</p>
        </div>
     );
}
 
export default CardText;