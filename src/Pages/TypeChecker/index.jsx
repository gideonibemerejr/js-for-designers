import React, { Component } from 'react';
import { Output, ControlPanel } from './components'

import "./TypeChecker.css"

class TypeChecker extends Component {
    state = { 
        defaultSentence: 'The quick brown fox jumps over the lazy dog',
        sentence: '',
        typeFace: 'Faune',
        typeSize: 64,
        fontWeight: 400,
        typefaces: ['Fira Sans', 'Montserrat', 'Taviraj', 'Trirong'],
        leading: 1.5,
        italic: false,
        bgColors: ['rgb(42, 42, 42)', 'rgb(255, 255, 255)', 'rgb(155, 81, 224)', 'rgb(242, 153, 74)', 'rgb(165, 207, 111)'],
        backgroundColor: 'rgb(42, 42, 42)',

     }

    //  Handle the input tags in the Control components' onChange props using computed properties
    // * With this method, you do not have to create multiple functions to update state
    handleChange = e => {
        const value = e.currentTarget.type === 'checkbox' ? e.currentTarget.checked : e.currentTarget.name === 'backgroundColor' ? e.currentTarget.style.backgroundColor : e.currentTarget.value 


        this.setState({
            
            // Updating state dynamically with computed properties
            [e.currentTarget.name]: value
            
        })


    }
    

    render() {
        console.log(this.state.backgroundColor)

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