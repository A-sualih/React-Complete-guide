import React, { useEffect } from "react";
import "./AboutSection.css";
import AOS from "aos";
import mosque from '../../assets/about-1.png'
const AboutSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <div className="about-section">
      <div className="about-container">

        {/* IMAGE */}
        <img
          src={mosque}
          alt="Mosque"
          className="about-image"
          data-aos="fade-right"
        />

        {/* CONTENT */}
        <div className="about-content" data-aos="fade-left">
          <h2 className="about-title">About Al-Buraq</h2>

          <p className="about-text">
            It is the responsibility of every Muslim to serve for DEEN.
          </p>

          <p className="about-text">
            We established our center in 1954, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>

          <p className="about-quote">
            Prophet Muhammad (S.A.W.W):  
            <br />  
            “If you wish for Allah to multiply your wealth,  
            then purify it (through zakat).”
          </p>

          <a href="#" className="about-btn" data-aos="zoom-in">
            Read More
          </a>
        </div>

      </div>
    </div>
  );
};

export default AboutSection;
