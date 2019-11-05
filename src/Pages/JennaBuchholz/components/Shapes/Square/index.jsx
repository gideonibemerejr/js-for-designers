import React from 'react'
import "../Shapes.css"


const Square = ({backgroundColor, parallaxSquare}) => {
    return ( <div data-parallax={parallaxSquare} style={{backgroundColor}} className="JB-square"/> );
}
 
export default Square;