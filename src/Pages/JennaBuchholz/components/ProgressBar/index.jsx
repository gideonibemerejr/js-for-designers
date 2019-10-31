import React from 'react';
import "./ProgressBar.css"

const ProgressBar = ({percentage, isDark}) => {
    return (<div style={{ width: `${percentage}%` }}className={isDark ? "progress white" : "progress"}></div>  );
}
 
export default ProgressBar;

