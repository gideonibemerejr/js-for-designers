import React from 'react'
import './ControlPanel.css'

const ControlPanel = ({handleTextChange, sentence}) => {
    return ( 
        <section className="control-panel--wrapper">
            <h1>Type Checker</h1>
            <Control name="sentence" htmlFor="sentence" handleChange={handleTextChange} placeholder="The quick brown fox jumps over the lazy dog"  label="Your Text" type="text" value={sentence}/>
        </section>
     );
}
 
export default ControlPanel;


const Control = ({htmlFor, type, name, label, placeholder, handleChange, value}) => {
    return ( 
        <div className="control">
            <label htmlFor={htmlFor}>{label}</label>
            <input value={value} onChange={handleChange} placeholder={placeholder}  type={type} name={name}/>
        </div> 
    );
}
