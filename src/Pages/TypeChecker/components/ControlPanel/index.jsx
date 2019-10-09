import React from 'react'
import './ControlPanel.css'

const ControlPanel = ({handleTextChange,}) => {
    return ( 
        <section className="control-panel">
            <h1>Type Checker</h1>
            <Option handleChange={handleTextChange} placeholder="The quick brown fox jumps over the lazy dog" name="sentence" htmlFor="sentence" label="Your Text" type="text" />
        </section>
     );
}
 
export default ControlPanel;


const Option = ({htmlFor, type, name, label, placeholder, handleChange}) => {
    return ( 
        <div className="option">
            <label htmlFor={htmlFor}>{label}</label>
            <input onChange={handleChange} placeholder={placeholder}  type={type} name={name}/>
        </div> 
    );
}
