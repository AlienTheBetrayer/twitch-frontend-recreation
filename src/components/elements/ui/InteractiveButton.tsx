import { cloneElement, useState } from 'react';
import React from 'react';

import Button from "./Button";
import HoverComponent from "./HoverComponent";

const InteractiveButton = ({children, className}: any) => {
    // getting the top position
    // showing the popup when hovered
    const [popup, setPopup] = useState(false);
    const [y, setY] = useState(-1);
    
    const handleEnter = (e: any): void => {
        setY(e.currentTarget.getBoundingClientRect().top);
        setPopup(true);
    };

    const handleLeave = (): void => {
        setY(-1);
        setPopup(false);
    };


    // separating all children and hover component
    const childrenArray = React.Children.toArray(children);
    const hoverComponent: any = childrenArray.find((c: any) => c.type === HoverComponent);
    const otherComponents: any = childrenArray.filter((c: any) => c.type !== HoverComponent);

    return (
        <Button onMouseEnter={handleEnter} onMouseLeave={handleLeave} className={`w-10 h-10 group ${className}`}>
            {popup ? cloneElement(hoverComponent, { y }) : null} 
            {otherComponents}
        </Button>
    )
}

export default InteractiveButton;