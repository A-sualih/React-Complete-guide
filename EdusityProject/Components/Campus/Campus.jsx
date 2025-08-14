import React from "react";
import gallery_1 from "../../assets/gallery-1.png";
import gallery_2 from "../../assets/program-2-copy.png";
import gallery_3 from "../../assets/program-3-copy.png";
import gallery_4 from "../../assets/gallery-4.png";
import white_arrow from "../../assets/white-arrow.png";
import "./Campus.css";
const Capmpus = () => {
  return (
    <div className="campus" id="campus">
      <div className="gallery">
        <img src={gallery_1} alt="" />
        <img src={gallery_2} alt="" />
        <img src={gallery_3} alt="" />
        <img src={gallery_4} alt="" />
      </div>
      <button className="btn dark-btn">
        See more here <img src={white_arrow} alt="" />
      </button>
    </div>
  );
};
export default Capmpus;
