import React, { useRef } from "react";
import "./Testimonial.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.jpg";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.jpg";
import user_4 from "../../assets/user-4.jpg";
const Testimonial = () => {
  const slider = useRef();
  let tx = 0;
  const slideForward = () => {
    if (tx > -75) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  return (
    <div className="testimonials container" id="testimonials">
      <img src={next_icon} alt="" className="next-btn" onClick={slideForward} />
      <img
        src={back_icon}
        alt=""
        className="back-btn"
        onClick={slideBackward}
      />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>Ahmed Sualih 1</h3>
                  <span>Aljamie ,Dubi</span>
                </div>
              </div>
              <p>
                choosing to pursue my degree at Edusity was one of fthe best
                decisions I've ever made.The supportive community, state-of-the
                -art facilities,and commitment to academic execellence have
                truly exceeded my expectation
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>Ahmed Sualih 2</h3>
                  <span>Aljamie ,Dubi</span>
                </div>
              </div>
              <p>
                choosing to pursue my degree at Edusity was one of fthe best
                decisions I've ever made.The supportive community, state-of-the
                -art facilities,and commitment to academic execellence have
                truly exceeded my expectation
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>Ahmed Sualih 3</h3>
                  <span>Aljamie ,Dubi</span>
                </div>
              </div>
              <p>
                choosing to pursue my degree at Edusity was one of fthe best
                decisions I've ever made.The supportive community, state-of-the
                -art facilities,and commitment to academic execellence have
                truly exceeded my expectation
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>Ahmed Sualih</h3>
                  <span>Aljamie ,Dubi</span>
                </div>
              </div>
              <p>
                choosing to pursue my degree at Edusity was one of fthe best
                decisions I've ever made.The supportive community, state-of-the
                -art facilities,and commitment to academic execellence have
                truly exceeded my expectation
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonial;
