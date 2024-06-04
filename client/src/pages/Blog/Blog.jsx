import React from "react";
import { Link } from "react-router-dom";
import "./blog.css";
import BlogCard from "../../components/blogCard/BlogCard";

const Blog = () => {
  return (
    <>
      <div className="blog-container">
        <div className="top">
          <div className="left">
            <p>ENTREPRENUR INTERVIEWS</p>
            <h1>
              Funding Alert! Crest, Gets Funding from its first 2 Customers,
              Sirona Hygiene and Samosa Party
            </h1>
            <p>August 4, 2022</p>
            <button>Read More</button>
          </div>
          <div className="right">
            <img src="/blog1.webp" alt="" />
          </div>
        </div>
      </div>
      <div className="blog-container-2">
        <div className="link-list">
          <Link>All</Link>
          <Link>Entrepreneur Interview</Link>
          <Link>Expert Tips</Link>
        </div>
        <div className="blog-card-list">
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </div>
    </>
  );
};

export default Blog;
