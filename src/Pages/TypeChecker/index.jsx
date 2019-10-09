import React, { Component } from 'react';
import { Output, ControlPanel } from './components'

import "./TypeChecker.css"

class TypeChecker extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="type-checker">
               <ControlPanel />
               <Output />
            </div>
         );
    }
}
 
export default TypeChecker;