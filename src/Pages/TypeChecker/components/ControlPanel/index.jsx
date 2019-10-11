import React from 'react'
import { Link } from 'react-router-dom'
import './ControlPanel.css'

const ControlPanel = ({ handleChange, sentence, typeSize, leading, italic, typefaces, typeFace, fontWeight, bgColors, backgroundColor}) => {
    return ( 
        <section className="control-panel--wrapper">
            <h1>Type Checker</h1>

            {/* Text Control */}
            <Control key={1} name="sentence" htmlFor="sentence" handleChange={handleChange} placeholder="The quick brown fox jumps over the lazy dog"  label="Your Text" type="text" value={sentence}/>
            
            {/* Typeface Control */}
            <Control key={2} name="typeFace" htmlFor="typeFace" label="Typeface" type="select" value={typeFace} options={typefaces} handleChange={handleChange}/>
            
            {/* Type Size Control */}
            <Control key={3} name="typeSize" htmlFor="typeSize" label="Type size" type="range"  min={12} max={200} defaultValue={64} value={typeSize} handleChange={handleChange} />
           
            {/* Font Weight Control */}
            <Control key={4} name="fontWeight" htmlFor="fontWeight" label="Font weight" type="range"  min={100} max={900} step={100} defaultValue={400} value={fontWeight} handleChange={handleChange} />
           
            {/* Leading Control */}
            <Control key={5} name="leading" htmlFor="leading" label="Leading" type="range" min={0.75} max={2.5} step={0.01} defaultValue={1.5} value={leading} handleChange={handleChange}  />
            
            {/* Italic Control */}
            <Control key={6} name="italic" handleChange={handleChange} checked={italic} htmlFor="italic" label="Italic" type="checkbox" />
            
            {/* Page + Text Color Control */}
            <div className="control">
                <label htmlFor="colors">Colors</label>
                <div name="colors" className="colors">
                    {bgColors.map(color => 
                        (
                            <button
                            onClick={handleChange} 
                            key={color}
                            name="backgroundColor"
                            className={backgroundColor === color ? 'selected' : ''}
                            style={{ backgroundColor: color, color: `${color === 'rgb(42, 42, 42)' || color === 'rgb(155, 81, 224)' ? 'rgb(255, 255, 255)' : 'rgb(42, 42, 42)'}`}}>
                                a
                            </button>    
                        )
                    
                    )}
                  
                </div>
            </div>
            <div className="back">
                back to
                <Link className='HomePage-link' to="/">
                    <h2>JS for Designers</h2>
                </Link>
            </div>
        </section>
     );
}
 
export default ControlPanel;


const Control = ({htmlFor, type, name, label, placeholder, handleChange, value, options, min, max, checked,  step}) => {
    
    return ( 
        <div className="control">

         
            {
                type === 'select' ? 
                    (
                        <>
                        <label htmlFor={htmlFor}>{label}</label>
                        <select name={name} value={value} onChange={handleChange}> 
                            {options.map(option => <option key={option} value={option}>{option}</option>)} 
                        </select>
                        </>
                    ) 
                        : 
                    ( 
                        type === 'range' ? 
                            ( 
                                <>
                                <label htmlFor={htmlFor}>{label} <span>{label === 'Type size' ? `${value}px` : value}</span></label>
                                <input step={step} min={min} max={max} value={value} onChange={handleChange} placeholder={placeholder}  type={type} name={name}/> 
                                </>
                            )
                                : 
                            (
                                type === 'checkbox' ? 
                                (
                                <>
                                <label htmlFor={htmlFor}>{label}</label>
                                <input  checked={checked} value={value} onChange={handleChange} placeholder={placeholder}  type={type} name={name}/>
                                </>
                                )
                                    :
                                (
                                    <>
                                    <label htmlFor={htmlFor}>{label}</label>
                                    <input  value={value} onChange={handleChange} placeholder={placeholder}  type={type} name={name}/>
                                    </>
                                ) 
                            ) 
                    
                    )   
            }
        </div> 
    );
}

