const LinkText = ({children,onClick,customStyle}) => {
    return ( 
        <p onClick={onClick} style={customStyle}>{children}</p>
     );
}
 
export default LinkText;