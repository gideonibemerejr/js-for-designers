import React from 'react'

const Circle = ({backgroundColor, parallaxCircle}) => {
    return ( <div data-parallax={parallaxCircle}className="JB-circle" style={{backgroundColor}} /> );
}
 
export default Circle;