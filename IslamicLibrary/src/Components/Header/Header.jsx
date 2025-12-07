import React, { useState } from "react";
import "./Header.css";
import Logo from "../../assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { id: 1, name: "Home", href: "#pilars" },
    { id: 2, name: "Services", href: "#services" },
    { id: 3, name: "Events", href: "#events" },
    { id: 4, name: "Courses", href: "#courses" },
    { id: 5, name: "Pages", href: "#pages" }
  ];

  return (
    <nav className="header">
      <div className="logo-container">
        <img src={Logo} alt="AL-BURAQ Logo" className="logo-image" />
      </div>
      
      {/* Desktop Navigation */}
      <div className="nav-links">
        {navLinks.map((link) => (
          <a key={link.id} href={link.href} className="nav-link">
            {link.name}
          </a>
        ))}
        <button className="donate-btn">Donate Now</button>
      </div>

      {/* Mobile Hamburger Menu Button */}
      <button 
        className={`hamburger-menu ${isMenuOpen ? 'active' : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </button>

      {/* Mobile Navigation Menu */}
      <div className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
        <div className="mobile-nav-header">
          <img src={Logo} alt="AL-BURAQ Logo" className="mobile-logo" />
          <button className="close-menu" onClick={closeMenu}>×</button>
        </div>
        
        <div className="mobile-nav-links">
          {navLinks.map((link) => (
            <a 
              key={link.id} 
              href={link.href} 
              className="mobile-nav-link"
              onClick={closeMenu}
            >
              {link.name}
            </a>
          ))}
        </div>
        
        <button className="mobile-donate-btn" onClick={closeMenu}>
          Donate Now
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="mobile-overlay" onClick={closeMenu}></div>
      )}
    </nav>
  );
};

export default Header;