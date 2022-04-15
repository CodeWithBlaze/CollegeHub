import './card.css';
const Card = ({children,width=280,height=350,padding=15}) => {
    return (
        <div className='border-container'>
            <div className="card" style={{width,height,padding}}>
                {children}
            </div>
        </div> 
        
     );
}
 
export default Card;