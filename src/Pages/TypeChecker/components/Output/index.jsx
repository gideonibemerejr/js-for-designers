import React from 'react'
import './Output.css'


const Output = ({sentence, defaultSentence, handleChange}) => {
    return (
        <section className="text-output--wrapper">
            <textarea name="sentence" onChange={handleChange} className="text-output" value={sentence === '' ? defaultSentence : sentence} />
        </section> 

     );
}
 
export default Output;