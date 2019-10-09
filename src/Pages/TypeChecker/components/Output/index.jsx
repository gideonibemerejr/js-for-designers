import React from 'react'
import './Output.css'


const Output = ({sentence, defaultSentence}) => {
    return ( 
        <section className="output">
            {/* Check if there is isn't a sentence. If there is NOT sentence typed, then display the default sentence */}
          {sentence === '' ? defaultSentence : sentence}
        </section>
     );
}
 
export default Output;