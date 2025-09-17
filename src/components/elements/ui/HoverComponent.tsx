const HoverComponent = ({children, className, y}: any) => {
    if(y == undefined || y == -1)
        return ( <></> )
    
    return (
        <div style={{top: y}} className={`fixed flex rounded items ${className}`}>
            {children}
        </div>
    )
};

export default HoverComponent;