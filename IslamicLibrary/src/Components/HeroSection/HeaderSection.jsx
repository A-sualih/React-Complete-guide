import React from "react";
import "./HeroSection.css";
import ayat from "../../assets/banner-ayat.png";
const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <img src={ayat} alt="" />
        <h1>
          And We have sent you (O Muhammad SAWW) not but as a mercy for the
          'Alamin (mankind, jinns and all that exists)
        </h1>
        <button className="read-more-btn">Read More</button>
      </div>
    </div>
  );
};

export default HeroSection;
