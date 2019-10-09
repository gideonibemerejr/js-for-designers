import React from 'react'
import './ControlPanel.css'

const ControlPanel = ({handleTextChange, handleTypeSizeChange, sentence, typeSize}) => {
    return ( 
        <section className="control-panel--wrapper">
            <h1>Type Checker</h1>
            <Control name="sentence" htmlFor="sentence" handleChange={handleTextChange} placeholder="The quick brown fox jumps over the lazy dog"  label="Your Text" type="text" value={sentence}/>
            <Control name="typeFace" htmlFor="typeFace" label="Typeface" type="select" options={['Option 1', 'Option 2', 'Option 3']}/>
            <Control name="typeSize" htmlFor="typeSize" label="Type size" type="range"  min={12} max={200} defaultValue={64} value={typeSize} handleChange={handleTypeSizeChange} />
            <Control name="fontWeight" htmlFor="fontWeight" label="Font weight" type="range"  min="300" max="900" />
            <Control name="leading" htmlFor="leading" label="Leading" type="range" min="" max=""  />
            <Control name="italic" htmlFor="italic" label="Italic" type="checkbox" />
            <div className="control">
                <label htmlFor="colors">Colors</label>
                <div name="colors" className="colors">
                    <p>a</p>
                    <p>a</p>
                    <p>a</p>
                    <p>a</p>
                </div>
            </div>
        </section>
     );
}
 
export default ControlPanel;


const Control = ({htmlFor, type, name, label, placeholder, handleChange, value, options, min, max}) => {
    return ( 
        <div className="control">
            <label htmlFor={htmlFor}>{label}</label>
            {
                type === 'select' ? 
                    (
                        <select> 
                            {options.map(option => <option>{option}</option>)} 
                        </select>
                    ) 
                        : 
                    ( 
                        type === 'range' ? 
                            ( 
                                <input min={min} max={max} value={value} onChange={handleChange} placeholder={placeholder}  type={type} name={name}/> 
                            )
                                : 
                            (
                                <input value={value} onChange={handleChange} placeholder={placeholder}  type={type} name={name}/>
                            ) 
                    
                    )   
            }
        </div> 
    );
}
