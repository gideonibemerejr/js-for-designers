import React from 'react'
import './ControlPanel.css'

const ControlPanel = () => {
    return ( 
        <section className="control-panel">
            <h1>Type Checker</h1>
            <Option name="sentence" htmlFor="sentence" label="Your Text" type="text" />
        </section>
     );
}
 
export default ControlPanel;


const Option = ({htmlFor, type, name, label}) => {
    return ( 
        <div className="option">
            <label htmlFor={htmlFor}>{label}</label>
            <input type={type} name={name}/>
        </div> 
    );
}
