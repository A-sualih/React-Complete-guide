import React from "react";
import about_img from "../../assets/hero-2.png";
import play_icon from "../../assets/play-icon.png";
import "./About.css";
const About = ({ setPlayState }) => {
  return (
    <div className="about" id="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img
          src={play_icon}
          alt=""
          className="play-icon"
          onClick={() => {
            {
              setPlayState(true);
            }
          }}
        />
      </div>
      <div className="about-right">
        <h3>About University</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>
          Embark on a comprehensive education programs. Our cutting-edge
          curriculum is designed to empower students with the knowledge, skills
          and experiences needed to excel in the dynamic field of education
        </p>
        <p>
          With a focus on innovation, hands-on learning, and personalized
          mentorship, out programs prepare aspiring educators to make a
          meaningful impact in classrooms,schools,and communities
        </p>
        <p>
          Whether you aspire to become ateacher,administator, counselor,or
          educational leader, our diverse range of programs
        </p>
      </div>
    </div>
  );
};

export default About;
