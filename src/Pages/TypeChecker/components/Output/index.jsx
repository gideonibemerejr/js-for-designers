import React from 'react'
import './Output.css'


const Output = ({sentence, defaultSentence}) => {
    return ( 
        <section className="output">
          {sentence === '' ? defaultSentence : sentence}
        </section>
     );
}
 
export default Output;