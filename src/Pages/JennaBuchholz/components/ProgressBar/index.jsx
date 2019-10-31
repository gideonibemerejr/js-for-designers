import React from 'react';
import "./ProgressBar.css"

const ProgressBar = ({percentage}) => {
    return (<div style={{ width: `${percentage}%` }}className="progress"></div>  );
}
 
export default ProgressBar;

