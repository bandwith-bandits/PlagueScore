import React from 'react';
import {useState} from 'react';
import { Link } from 'react-router-dom';
import '../../assets/framework.css'
import './SplashSearch.css';

let SplashSearch = (props) => {
    const searchStart = "/search?q=";
    const [search, setSearch] = useState(searchStart);
    return (
    <div className="splash">
        <h1>Plague Score</h1>
        <form>
            <input onChange={(e) => setSearch(e.target.value)} type="search" ></input>
            <Link to={searchStart+search}>
                <button className="button">Search!</button>
            </Link>
        </form>
    </div>
    );
}

function searchTo(search) {

}

export default SplashSearch;