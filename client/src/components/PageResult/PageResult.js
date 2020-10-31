import React from 'react';
import './PageResult.css'
const PageResult = function(props) {
    return (
    <li className="bussiness-result">
        <h3>{props.data.name}</h3>
        <p>About the business!</p>
    </li>
    )
}

export default PageResult;