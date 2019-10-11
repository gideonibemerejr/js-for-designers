import React from 'react'
import { Square, Circle } from '../Shapes'

import './Section.css'


const Section = ({ client, imageNo, circle, square, photo, backgroundColor }) => {
    return ( 
        <section className={`JB-section ${client}${imageNo}`} style={{backgroundColor}} >
            <div className="JB-content">
            {
                   client === 'AlterEgo' && imageNo === 1  ? 
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
     );
}
 
export default Section;