import React from 'react'
import './Output.css'


const Output = ({sentence, defaultSentence, handleChange, typeSize, leading, italic, typeFace, fontWeight, backgroundColor}) => {
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
                fontFamily: typeFace,
                fontWeight,
                backgroundColor,
                color: `${backgroundColor === 'rgb(42, 42, 42)' ||backgroundColor === 'rgb(155, 81, 224)' ? '#fff' : '#2a2a2a'}`
            }}
            />
        </section> 

     );
}
 
export default Output;