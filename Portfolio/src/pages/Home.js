import React from 'react';
import Navbar from './Navbar';

function Home() {
    return (
        <div className='home'>
            {/* Navbar Section */}
            <Navbar />

            {/* Section One */}
            <div className="header">
                <div className="header-left">
                    <div className="header-left-img">
                    </div>
                </div>
                <div className="header-right"></div>
            </div>
        </div>
    );
}

export default Home;