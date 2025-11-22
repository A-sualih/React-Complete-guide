import React from "react";
import Header from "./Components/Header/Header";
import HeroSection from "./Components/HeroSection/HeaderSection";
import ChatButton from "./Components/ChatButton/ChatButton";
import "./App.css";
import PillarsOfIslam from "./Components/PillarsOfIslam/PillarsOfIslam";
import AboutSection from "./Components/AboutSection/AboutSection";
import HomePage from "./Components/Homepage/Homepage";
import PrayerTimings from "./Components/Homepage/PrayerTimings";
import ServicesSection from "./Components/Service/ServicesSection";
import DonationCard from "./Components/Service/DonationCard";
import Courses from "./Components/Courses/Courses";
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
      <ServicesSection/>
      <DonationCard/>
      <Courses/>
    </div>
  );
};

export default App;
