import React from "react";
import { FaTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FiArrowUpCircle } from "react-icons/fi";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="upper-div">
        <h1>You can grow faster than you think!</h1>
        <p>
          Plan with CleverBooks to fulfil your demand today, and dreams
          tomorrow. We bring the methods and
        </p>
        <p>
          technologies of large global companies to help brands of all sizes
          scale.
        </p>
        <button>Get started with CleverBooks</button>
      </div>
      <div className="lower-footer">
        <div className="div1">
          <div className="img-div">
            <div className="d-flex align-items gap-20 mb-5">
              <img src="/logo.png" alt="logo" className="mb-0" width="100px" />
              <h1 className="mb-0 d-flex align-items-center">CleverBooks</h1>
            </div>
            <p>
              CleverBooks is an AI-powered supply chain software that provides
              companies tools for demand forecasting, inventory planning and
              more. This helps them have the right amount of stock, optimise
              space and fulfil every order.
            </p>
          </div>
        </div>
        <div className="div2">
          <strong className="fs-5">
            <p>Explore</p>
          </strong>
          <p>Product</p>
          <p>Pricing</p>
          <p>Customer Stories</p>
          <p>Career</p>
        </div>

        <div className="div3">
          <strong className="fs-5">
            <p>Learn</p>
          </strong>
          <p>About us</p>
          <p>Blog</p>
        </div>

        <div className="div4">
          <strong className="fs-5">
            <p>Contact CleverBooks</p>
          </strong>
          <p>sales@getcleverbooks.ai</p>
          <div className="address">
            <p>Registered Office:</p>
            <p>
              1507, Incubex, 11th cross road, 19th Main Road, Bengaluru, India.
              560102
            </p>
          </div>
          <div className="address">
            <p>Corporate Office:</p>
            <p>
              291, All Time Space, 4th Floor, 15th A Cross, Sector - 6, HSR
              Layout, Bengaluru, India. 560102
            </p>

            <div className="social-icons">
              <FaTwitter className="fs-4" />
              <FaFacebookF className="fs-4" />
              <FaInstagram className="fs-4" />
              <FaLinkedin className="fs-4" />
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-part">
        <div className="left-part">
          <div className="top">
            <p>Copyright 2024 CleverBooks</p>
            <p>Terms of Service</p>
            <p>Privacy Policy</p>
          </div>
          <div className="bottom">
            <p>Conifer Innovations Private</p>
            <p>Limited CIN: U72900KA2022PTC163144</p>
          </div>
        </div>
        <div className="right-part">
          <FiArrowUpCircle
            className="fs-1 me-3 mt-3 cursor-pointer"
            onClick={() => window.scrollTo(0, 0)}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
