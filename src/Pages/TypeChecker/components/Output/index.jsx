import React from 'react'
import './Output.css'


const Output = ({sentence, defaultSentence, handleChange, typeSize, leading, italic, typeFace}) => {
    return (
        <section className="text-output--wrapper">
            <textarea 
            name="sentence" 
            onChange={handleChange} 
            className="text-output" 
            value={sentence === '' ? defaultSentence : sentence} 
            style={{
                fontSize: `${typeSize}px`,
                lineHeight: leading,
                fontStyle: `${italic ? 'italic' : 'normal'}`,
                fontFamily: typeFace
            }}
            />
        </section> 

     );
}
 
export default Output;