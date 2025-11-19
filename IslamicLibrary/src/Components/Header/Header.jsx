import React from "react";
import "./Header.css";
import Logo from "../../assets/logo.png";

const Header = () => {
  return (
    <nav className="header">
      <div className="logo-container">
        <img src={Logo} alt="AL-BURAQ Logo" className="logo-image" />
      </div>
      <div className="nav-links">
        <a href="#pilars">Home</a>
        <a href="#services">Services</a>
        <a href="#events">Events</a>
        <a href="#courses">Courses</a>
        <a href="#pages">Pages</a>
        <button className="donate-btn">Donate Now</button>
      </div>
    </nav>
  );
};

export default Header;
