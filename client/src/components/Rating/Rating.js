import React from 'react';
import './Rating.css'
const Rating = function(props) {
    const base = "icon ";
    const iconClass = base + props.iconClass;
    return(
        <div>
            <div className={iconClass}></div>
            <div className={iconClass}></div>
            <div className={iconClass}></div>
            <div className={iconClass}></div>
            <div className={iconClass}></div>
        </div>
    )
};

export default Rating