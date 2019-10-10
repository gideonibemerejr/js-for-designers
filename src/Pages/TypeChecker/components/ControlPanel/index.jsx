import React from 'react'
import './ControlPanel.css'

const ControlPanel = ({ handleChange, sentence, typeSize, leading}) => {
    return ( 
        <section className="control-panel--wrapper">
            <h1>Type Checker</h1>

            {/* Text Control */}
            <Control name="sentence" htmlFor="sentence" handleChange={handleChange} placeholder="The quick brown fox jumps over the lazy dog"  label="Your Text" type="text" value={sentence}/>
            
            {/* Typeface Control */}
            <Control name="typeFace" htmlFor="typeFace" label="Typeface" type="select" options={['Option 1', 'Option 2', 'Option 3']}/>
            
            {/* Type Size Control */}
            <Control name="typeSize" htmlFor="typeSize" label="Type size" type="range"  min={12} max={200} defaultValue={64} value={typeSize} handleChange={handleChange} />
           
            {/* Font Weight Control */}
            <Control name="fontWeight" htmlFor="fontWeight" label="Font weight" type="range"  min={300} max={900} />
           
            {/* Leading Control */}
            <Control name="leading" htmlFor="leading" label="Leading" type="range" min={0.75} max={2.5} step={0.25} defaultValue={1.5} value={leading} handleChange={handleChange}  />
            
            {/* Italic Control */}
            <Control name="italic" htmlFor="italic" label="Italic" type="checkbox" />
            
            {/* Page + Text Color Control */}
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
         
            {
                type === 'select' ? 
                    (
                        <>
                        <label htmlFor={htmlFor}>{label}</label>
                        <select> 
                            {options.map(option => <option>{option}</option>)} 
                        </select>
                        </>
                    ) 
                        : 
                    ( 
                        type === 'range' ? 
                            ( 
                                <>
                                <label htmlFor={htmlFor}>{label} <span>{label === 'Type size' ? `${value}px` : value}</span></label>
                                <input step={name === 'leading' ? 0.01 : ''} min={min} max={max} value={value} onChange={handleChange} placeholder={placeholder}  type={type} name={name}/> 
                                </>
                            )
                                : 
                            (
                                <>
                                <label htmlFor={htmlFor}>{label}</label>
                                <input value={value} onChange={handleChange} placeholder={placeholder}  type={type} name={name}/>
                                </>
                            ) 
                    
                    )   
            }
        </div> 
    );
}
