import React from 'react'
import { Square, Circle } from '../Shapes'

import './Section.css'


const Section = ({ circle, square, photo, backgroundColor }) => {
    return ( 
        <section className="JB-section" style={{backgroundColor}} >
            <div className="JB-content">
                <Square backgroundColor={square}/>
                <img src={photo} alt=""/>
                <Circle backgroundColor={circle} />
            </div>
        </section>
     );
}
 
export default Section;