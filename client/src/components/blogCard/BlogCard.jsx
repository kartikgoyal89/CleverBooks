import React from "react";
import "./blogCard.css";

const BlogCard = () => {
  return (
    <div className="card-container">
      <div className="img-div">
        <img src="/blogcard1.png" alt="" width="100%" height="100%" />
      </div>
      <p>Expert Tips</p>
      <h4>Impact of RPA (Robotic Process Automation) in Supply Chain</h4>
      <p>Oct 12, 2023</p>
    </div>
  );
};

export default BlogCard;
