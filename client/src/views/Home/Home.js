import React from 'react';
import Review from '../../components/Review/Review.js';
import SplashSearch from '../../components/SplashSearch/SplashSearch.js';
import './Home.css';

function Home() {
    return (
        <div className="App">
            <header className="App-header">
                <SplashSearch></SplashSearch>
            </header>
            <h3>Top Comment</h3>
            <Review title="Great review!" content="This is the review" />
        </div>
    );
}

export default Home;
