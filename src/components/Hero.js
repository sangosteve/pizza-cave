import React from 'react';
import './Hero.css';
function Hero(){
    return(
        <div className="hero-section">
            <img src="./images/hero-bg.jpg"/>
            <div className="hero-overlay">
                <h2>HERO</h2>
                <button className="order-menu-btn"><h1>Order Menu</h1></button>
                </div>
            </div>
    )
}

export default Hero;