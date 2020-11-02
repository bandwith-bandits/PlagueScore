import React from 'react';
import Card from '../Card/Card.js'
import './PageResult.css'
import {Link} from 'react-router-dom'
const PageResult = function(props) {
    return (
    <li className="bussiness-result">
        <Card>
            <Link to={"/page/"+props.data.name}><h3>{props.data.name}</h3></Link>
            <p>About the business!</p>
        </Card>
    </li>
    )
}

export default PageResult;