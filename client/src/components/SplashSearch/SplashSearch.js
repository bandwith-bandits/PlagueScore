import React from 'react';
import {useState} from 'react';
import { Link } from 'react-router-dom';
import '../../assets/framework.css'
import './SplashSearch.css';
import Logo from '../../assets/logo.png'

let SplashSearch = (props) => {
    const searchStart = "/search?q=";
    const [search, setSearch] = useState(searchStart);
    return (
    <div className="splash">
        <img className="splash-logo" src={Logo} alt="React logo" />
        <h1>Plague Score</h1>
        <form>
            <input onChange={(e) => setSearch(e.target.value)} type="search" ></input>
            <Link to={searchStart+search}>
                <button className="splash-button"><i class="fas fa-search"></i></button>
            </Link>
        </form>
    </div>
    );
}


export default SplashSearch;