import Card from '../card/Card';
import ProfilePhoto from '../profile/ProfilePhoto';
import ReactStars from "react-rating-stars-component";
import './review_card.css';

const ReviewCard = ({image,name}) => {
    return ( 
        <Card width={352} height={220}>
            <div className="review-client-info">
                <ProfilePhoto width={60} image={image}/>
                <div>
                    <label>{name}</label>
                    <div style={{marginLeft:23,marginTop:8}}>
                        <ReactStars 
                        isHalf={true}
                        count={5}
                        onChange={()=>console.log("Chnaged")}
                        size={18}
                        activeColor="#ffd700"
                        />
                    </div>
                    
                </div>
                
            </div>
            <p className='review-client-review'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
            </p>
        </Card>
     );
}
 
export default ReviewCard;