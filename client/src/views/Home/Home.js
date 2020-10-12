import React from 'react';
import logo from '../../assets/logo.svg';
import SplashSearch from '../../components/SplashSearch/SplashSearch.js';
import './Home.css';

function Home() {
    return (
        <div className="App">
            <header className="App-header">
                <SplashSearch></SplashSearch>
                <p>
                    Todo! Add top comment / featured
                </p>
            </header>
        </div>
    );
}

export default Home;
