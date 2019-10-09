import React from 'react'
import './Output.css'


const Output = ({sentence, defaultSentence}) => {
    return (
        <section className="output">

            <textarea className="text-output" value={sentence === '' ? defaultSentence : sentence} />
        </section> 

     );
}
 
export default Output;