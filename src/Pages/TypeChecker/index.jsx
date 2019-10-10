import React, { Component } from 'react';
import { Output, ControlPanel } from './components'

import "./TypeChecker.css"

class TypeChecker extends Component {
    state = { 
        defaultSentence: 'The quick brown fox jumps over the lazy dog',
        sentence: '',
        typeFace: '',
        typeSize: 64,
        fontWeight: '',
        leading: 1.5,
        italic: false,
        colors: [],
        activeColor: '',

     }

    //  Handle the input tags in the Control components' onChange props using computed properties
    // * With this method, you do not have to create multiple functions to update state
    handleChange = e => {
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
               <ControlPanel {...this.state} handleChange={this.handleChange} />

               {/* Spreading the entire state object to be received as props in the output */}
               <Output {...this.state} handleChange={this.handleChange}/>
            </div>
         );
    }
}
 
export default TypeChecker;