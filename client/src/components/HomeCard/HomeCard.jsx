import React from "react";
import "./homeCard.css";

const HomeCard = () => {
  return (
    <div className="home-card-container">
      <img
        src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63f63ee54595853ca5e31682_what%20to%20orderr%20(1).svg"
        alt=""
        width="60px"
      />
      <h4>What to Order</h4>
      <p>
        Get accurate demand and days to stock out. Automate purchase planning so
        you can always have what you need for your next sales cycle.
      </p>
    </div>
  );
};

export default HomeCard;
