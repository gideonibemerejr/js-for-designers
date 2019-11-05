import React from 'react'
import { Square, Circle } from '../Shapes'

import './Section.css'


const Section = React.forwardRef(({ client, imageNo, circle, square, photo, backgroundColor, c, parallaxSquare, parallaxCircle }, ref) => {
    const dataDark = imageNo === 3 ? true : false
    return (
    <section 
    ref={ref} 
    data-client={client} 
    data-page={imageNo % 2 === 0 ? '2 / 2' : '1 / 2'} 
    data-is-dark={dataDark} 
    className={`JB-section ${client}${imageNo}`} 
    style={{backgroundColor}} 
    >
        <div className="JB-content">
        {
                c === 'AlterEgo' && imageNo === 1  ? 
                (
                <>
                <Square parallaxSquare={parallaxSquare} backgroundColor={square}/>
                    <img src={photo} alt=""/>
                <Circle parallaxCircle={parallaxCircle} backgroundColor={circle} />
                </>
                ) 
                :  
                (
                <>
                <Circle parallaxCircle={parallaxCircle} backgroundColor={circle} />
                    <img src={photo} alt=""/>
                <Square parallaxSquare={parallaxSquare} backgroundColor={square}/>
                </>
                
                )
            
            
            }
            
        </div>
    </section>

    )

})


export default Section;