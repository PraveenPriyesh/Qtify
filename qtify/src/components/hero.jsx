import React from "react";
import "./hero.css";
import HeroImage from '../asserts/HeroImage.png';
function Hero(){
    return(
        <div>
            <div className="hero-container">
                <div className="inner-container">
                    
                
                    <div className="hero-text">
                        <h1>100 Thousand Songs, ad-free<br/>Over Thousands podcast episodes</h1>
                    </div>
                    <img src={HeroImage}></img>
                </div>
            </div>
        </div>
    )
}
export default Hero