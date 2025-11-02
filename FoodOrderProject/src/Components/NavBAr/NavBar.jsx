import React, { useState, useContext } from "react";
import "./NavBar.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { StoreContext } from "../../Context/StoreContex"; // ✅ Import your context

const NavBar = ({ setShowLogin }) => {
  const [sidBarOpen, setSidBarOpen] = useState(false);
  const [menu, setMenu] = useState("home");
  const { getTotalCartQuantity } = useContext(StoreContext);

  return (
    <div className="navbar">
      <Link to="/">
        <img src={assets.ahmed} alt="logo" className="logo" />
      </Link>

      <ul className={`navbar-menu ${sidBarOpen ? "open" : ""}`}>
        <img
          src={assets.close_icons} // <-- Add a close icon in your assets
          alt="close"
          className="close-icon"
          onClick={() => setSidBarOpen(false)}
        />
        <Link
          to="/"
          onClick={() => {
            setMenu("home");
            setSidBarOpen(false);
          }}
          className={menu === "home" ? "active" : ""}
        >
          Home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => {
            setMenu("menu");
            setSidBarOpen(false);
          }}
          className={menu === "menu" ? "active" : ""}
        >
          Menu
        </a>
        <a
          href="#app-download"
          onClick={() => {
            setMenu("mobile-app");
            setSidBarOpen(false);
          }}
          className={menu === "mobile-app" ? "active" : ""}
        >
          Mobile App
        </a>
        <a
          href="#footer"
          onClick={() => {
            setMenu("contact-us");
            setSidBarOpen(false);
          }}
          className={menu === "contact-us" ? "active" : ""}
        >
          Contact Us
        </a>
      </ul>

      {/* Right side */}
      <div className="navbar-right">
        <img src={assets.search_icon} alt="search" />

        <div className="navbar-search-icon">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="basket" />
          </Link>
          {/* ✅ Show total quantity as a red dot */}
          {getTotalCartQuantity() > 0 && (
            <div className="dot">{getTotalCartQuantity()}</div>
          )}
        </div>

        <button onClick={() => setShowLogin(true)}>Sign in</button>
        <img
          className="hamburger"
          src={assets.sidbar_menu}
          onClick={() => setSidBarOpen(!sidBarOpen)}
          alt=""
        />
      </div>
    </div>
  );
};

export default NavBar;
