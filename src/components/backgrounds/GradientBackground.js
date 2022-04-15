import './gradient_background.css';
const GradientBackground = ({children}) => {
    return ( 
        <div className="gradient-background-container">
            {children}
        </div>
     );
}
 
export default GradientBackground;