import React from "react";
    
export const Image = ({
    className,
    src,
    width,
    alt
}) => {
    return (
        <img className={className} src={`${src}`} width={width} alt={`${alt}`}/>
    );
}
