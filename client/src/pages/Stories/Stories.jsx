import React from "react";
import "./stories.css";
import { Link } from "react-router-dom";

const Stories = () => {
  return (
    <>
      <div className="story-container">
        <div className="upper">
          <div className="left">
            <img src="/story1.svg" alt="" />
            <h1>
              Crest helps Samosa Party fulfil 95% of their Customer Demands
            </h1>
            <button>Read Story</button>
          </div>
          <div className="right">
            <img src="/story2.webp" alt="" />
          </div>
        </div>

        <marquee
          behaviour="repeat"
          direction="left"
          scrollamount="10"
          scrolldelay="100"
          loop="3"
          bgcolor="transparent"
          width="100%"
          height="50"
        >
          <div className="d-flex brand-marquee gap-20 pb-3 mb-3">
            <p>Happilo</p>
            <p>Nestle</p>
            <p>Cadbury</p>
            <p>Swiss Beauty</p>
            <p>Pilgrim</p>
            <p>RR Kabel</p>
            <p>Athlos</p>
            <p>The Whole Treat</p>
            <p>Happilo</p>
            <p>Happilo</p>
            <p>Happilo</p>
            <p>Happilo</p>
          </div>
        </marquee>
      </div>

      <div className="story-container-2">
        <div className="story-card">
          <img src="/story2.webp" alt="" />
          <img src="/story1.svg" alt="" />
          <p>Crest helps Samosa Party fulfil 95% of their Customer Demands</p>
          <Link>Read Story </Link>
        </div>

        <div className="story-card">
          <img src="/story2.webp" alt="" />
          <img src="/story1.svg" alt="" />
          <p>Crest helps Samosa Party fulfil 95% of their Customer Demands</p>
          <Link>Read Story </Link>
        </div>

        <div className="story-card">
          <img src="/story2.webp" alt="" />
          <img src="/story1.svg" alt="" />
          <p>Crest helps Samosa Party fulfil 95% of their Customer Demands</p>
          <Link>Read Story </Link>
        </div>
      </div>
    </>
  );
};

export default Stories;
