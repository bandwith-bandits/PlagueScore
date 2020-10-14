import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/framework.css'
import './SplashSearch.css';

const SplashSearch = function() {
    return (
    <div className="splash">
        <h1>Plague Score</h1>
        <div className="btn search-bar">
            <input type="search"></input>
            <button>Search!</button>
        </div>
    </div>
    );
}

export default SplashSearch;