import React from 'react'
import { Square, Circle } from '../Shapes'

import './Section.css'


const Section = React.forwardRef(({ client, imageNo, circle, square, photo, backgroundColor, c }, ref) => {
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
                <Square backgroundColor={square}/>
                    <img src={photo} alt=""/>
                <Circle backgroundColor={circle} />
                </>
                ) 
                :  
                (
                <>
                <Circle backgroundColor={circle} />
                    <img src={photo} alt=""/>
                <Square backgroundColor={square}/>
                </>
                
                )
            
            
            }
            
        </div>
    </section>

    )

})


export default Section;