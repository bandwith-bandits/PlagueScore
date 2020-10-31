import React from 'react';
import Review from '../../components/Review/Review.js';
import SplashSearch from '../../components/SplashSearch/SplashSearch.js';
import './Home.css';

function Home() {
    return (
        <div className="landing">
            <header className="landing-header">
                <SplashSearch></SplashSearch>
            </header>
            <h3>Top Comment</h3>
            <Review title="Great review!" content="This is the review" user="Stefan" />
            <Review title="Another Review" content="I wrote a review because I care." user="Diana" />
        </div>
    );
}

export default Home;
