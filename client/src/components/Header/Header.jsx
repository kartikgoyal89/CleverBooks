import React, { useState, useEffect } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { IoFastFoodOutline } from "react-icons/io5";
import { IoRestaurantOutline } from "react-icons/io5";
import { GiClothes } from "react-icons/gi";
import { RiMedicineBottleLine } from "react-icons/ri";
import { GiLipstick } from "react-icons/gi";
import useWindowWidth from "../useWindowWidth";

const Header = () => {
  const [open, setOpen] = useState(true);
  const windowWidth = useWindowWidth();
  return (
    <div>
      <section className="top-header d-flex align-items-center justify-content-between">
        <div className="logo-div">
          <div className="d-flex gap-20 align-items-center">
            <img src="/logo.png" alt="" />
            <h3 className="text-white mb-0">CleverBooks</h3>
          </div>
        </div>
        <div className="responsive-side">
          <HiMiniBars3BottomRight onClick={() => setOpen(!open)} />
        </div>
        <div className="header-link">
          <Link>Product</Link>
          <Link>Pricing</Link>
          <Link className="position-relative dropdown-link">Industry</Link>
          <div className="submenu-div position-absolute">
            <Link className="link">
              <GiLipstick className="sublink-icon" />
              Beauty and Personal Care
            </Link>
            <Link>
              <IoRestaurantOutline className="sublink-icon" />
              Quick Service Restaurants
            </Link>
            <Link>
              <IoFastFoodOutline className="sublink-icon" />
              Food & Beverages
            </Link>
            <Link>
              <GiClothes className="sublink-icon" />
              Apprel & Accessories
            </Link>
            <Link>
              <RiMedicineBottleLine className="sublink-icon" />
              Pharmaceuticals
            </Link>
          </div>
          <Link>Customer Stories</Link>
          <Link>About</Link>
          <Link>Blog</Link>
        </div>
        <div className="side-btn">
          <button>Login</button>
          <button>Talk to Us</button>
        </div>
      </section>
      {windowWidth <= 1086 && (
        <div className={`sidebar-part ${open === true ? "open" : "close"} `}>
          <div className="sidebar-links">
            <Link>Product </Link>
            <Link>Pricing</Link>
            <Link>Industry</Link>
            <Link>Customer Stories</Link>
            <Link>About</Link>
            <Link>Blog</Link>
          </div>
          <div className="button">
            <button>Login</button>
            <button>Talk to Us</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
