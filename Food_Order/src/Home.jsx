// pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>ReactMeals</h1>
          <h2>Delicious Food, Delivered To You</h2>
          <p>
            Choose your favorite meal from our broad selection of available
            meals and enjoy a delicious lunch or dinner at home.
          </p>
          <p>
            All our meals are cooked with high-quality ingredients, just in time
            and of course by experienced chefs!
          </p>
          <div className="hero-actions">
            <Link to="/meals" className="btn-primary">
              Order Now
            </Link>
            <Link to="/signup" className="btn-secondary">
              Create Account
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
