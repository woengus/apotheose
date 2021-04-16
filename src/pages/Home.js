import React from 'react';
import DynamycText from '../components/DynamycText';
import Navigation from '../components/Navigation';
import SocialNetwork from '../components/SocialNetwork';

const Home = () => {
    return (
        <div>
            <div className="home">
                <Navigation />
                <SocialNetwork />
                <div className="home-main">
                    <div className="main-content">
                        <h1>WOENGUS GAMES</h1>
                        <h2><DynamycText /></h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;