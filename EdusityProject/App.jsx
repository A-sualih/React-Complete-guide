import React, { useState } from "react";
import NavBar from "./Components/NavBar/NavBar";
import Hero from "./Components/Hero/Hero";
import Programs from "./Components/Programs/Programs";
import Title from "./Components/Title/Title";
import About from "./Components/About/About";
import Capmpus from "./Components/Campus/Campus";
import Testimonial from "./Components/Testimonials/Testimonial";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import VidioPlayer from "./Components/VidioPlayer/VidioPlayer";
const App = () => {
  const [playState, setPlayState] = useState(false);
  return (
    <div>
      <NavBar />
      <Hero />
      <div className="container">
        <Title subTitle="Our PROGRAM" title="What We Offer" />
        <Programs />
        <About setPlayState={setPlayState} />
        <Title subTitle="Gallery" title="Campus Photos" />
        <Capmpus />
        <Title subTitle="TESTIMONIAls" title="What Student Says" />
        <Testimonial />
        <Title subTitle="CONTACT US" title="Get in Touch" />
        <Contact />
        <Footer />
      </div>
      <VidioPlayer playState={playState} setPlayState={setPlayState} />
    </div>
  );
};
export default App;
