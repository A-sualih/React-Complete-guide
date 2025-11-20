import React from "react";
import Header from "./Components/Header/Header";
import HeroSection from "./Components/HeroSection/HeaderSection";
import ChatButton from "./Components/ChatButton/ChatButton";
import "./App.css";
import PillarsOfIslam from "./Components/PillarsOfIslam/PillarsOfIslam";
import AboutSection from "./Components/AboutSection/AboutSection";
import HomePage from "./Components/Homepage/Homepage";
import PrayerTimings from "./Components/Homepage/PrayerTimings";
const App = () => {
  return (
    <div className="app">
      <Header />
      <HeroSection />
      <ChatButton />
      <PillarsOfIslam />
      <AboutSection/>
      <HomePage/>
      <PrayerTimings/>
    </div>
  );
};

export default App;
