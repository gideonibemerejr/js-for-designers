import React, { Component } from 'react';
import { Output, ControlPanel } from './components'

import "./TypeChecker.css"

class TypeChecker extends Component {
    state = { 
        defaultSentence: 'The quick brown fox jumps over the lazy dog',
        sentence: '',
        typeFace: '',
        typeSize: null,
        fontWeight: '',
        leading: '',
        italic: false,
        colors: [],
        activeColor: '',

     }

    //  Handle the text input change
    handleTextChange = e => {
        this.setState({

            // Updating state dynamically with computed properties
            [e.currentTarget.name]: e.currentTarget.value

        })
    }
    
    handleTypeSizeChange = e => {
        this.setState({

            // Updating state dynamically with computed properties
            [e.currentTarget.name]: e.currentTarget.value

        })
    }
    render() { 
        console.log(this.state.sentence)
        return ( 
            <div className="type-checker--wrapper">

                {/* passing the onChange handlers as props to the control panel */}
               <ControlPanel {...this.state} handleTextChange={this.handleTextChange}/>

               {/* Spreading the entire state object to be received as props in the output */}
               <Output {...this.state} handleChange={this.handleTextChange}/>
            </div>
         );
    }
}
 
export default TypeChecker;