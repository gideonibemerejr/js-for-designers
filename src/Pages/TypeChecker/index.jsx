import React, { Component } from 'react';
import { Output, ControlPanel } from './components'

import "./TypeChecker.css"

class TypeChecker extends Component {
    state = { 
        defaultSentence: 'The quick brown fox jumps over the lazy dog',
        sentence: ''
     }

 
    handleTextChange = e => {
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value
        })
    }
    render() { 
        console.log(this.state.sentence)
        return ( 
            <div className="type-checker">
               <ControlPanel handleTextChange={this.handleTextChange} />
               <Output {...this.state} />
            </div>
         );
    }
}
 
export default TypeChecker;