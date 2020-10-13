import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/framework.css'
import './SplashSearch.css';

const SplashSearch = function() {
    return (
    <div class="splash">
        <h1>Plague Rank</h1>
        <div class="btn search-bar">
            <input type="search"></input>
            <button>Search!</button>
        </div>
    </div>
    );
}

export default SplashSearch;