import './inputbox.css';
const SearchBar = ({placeholder,customStyle,value,setValue}) => {
    return (
        <div>
            <input 
            style={customStyle} 
            placeholder={placeholder} 
            value={value}
            onChange={(value)=>setValue(value.target.value)}
            className="input-box"/>
            <br/>
            <i className="fa-solid fa-magnifying-glass"
                style={{
                color:customStyle.color?customStyle.color:"white",
                position:'relative',
                left:`calc(${customStyle.width} - 30px)`,
                bottom:0.5*customStyle.height,
                transform: "translateY(-50%)"
            }}>

            </i>
            
            
        </div> 
        
     );
}
 
export default SearchBar;