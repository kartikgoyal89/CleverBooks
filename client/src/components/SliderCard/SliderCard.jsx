import React from "react";
import "./slidercard.css";

const SliderCard = () => {
  return (
    <div className="slider-card-container">
      <div className="img-div">
        <img src="/sliderimg.png" alt="" />
      </div>
      <div className="details">
        <h3>Ease of use,for everyone</h3>
        <p>
          With an intutive interface and empathic design,Cleverbooks require
          only minimal training(or beginner-level knowledge of supply chain)to
          use.
        </p>
      </div>
    </div>
  );
};

export default SliderCard;
