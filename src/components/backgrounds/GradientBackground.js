import './gradient_background.css';
const GradientBackground = ({children,customStyle}) => {
    return ( 
        <div className="gradient-background-container" style={customStyle}>
            {children}
        </div>
     );
}
 
export default GradientBackground;