import React from "react";
import HomeCard from "../../components/HomeCard/HomeCard";
import "./home.css";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import SliderCard from "../../components/SliderCard/SliderCard";
import Slider from "react-slick";
import BlogCard from "../../components/blogCard/BlogCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import Marquee from "react-fast-marquee";

import "react-accessible-accordion/dist/fancy-example.css";

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const settings2 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1086,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 877,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 733,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <>
      <div className="home-container">
        <div className="left-part">
          <h1>
            Every order <br />
            fulfilled, <span>on time.</span>
          </h1>
          <h5>
            Avoid overstocking and understocking with CleverBooks. Created by
            supply-chain experts, it uses technology trusted by top global
            brands to support fast-growing startups. Simply put, we balance
            supply and demand, then help you scale up.
          </h5>
          <div className="btn-part">
            <button>Get started with CleverBooks</button>
            <div className="img">
              <img src="/home2.svg" alt="" />
            </div>
          </div>
        </div>
        <div className="right-part">
          <img src="/hero2.png" alt="alt-img" />
          <img src="/effect.svg" alt="" />
        </div>
      </div>
      <div className="home-container-2">
        <h1 className="title">Four key questions answered by CleverBooks</h1>
        <div className="cards-container d-flex flexp-wrap align-items-center justify-content-evenly gap-10">
          <HomeCard />
          <HomeCard />
          <HomeCard />
          <HomeCard />
        </div>
      </div>

      <div className="marquee-container py-3 mt-4">
        <Marquee>
          <h1 className="ms-5 me-5">Swiss Beauty</h1>
          <h1 className="ms-5 me-5">EverBloom</h1>
          <h1 className="ms-5 me-5">Athlos</h1>
          <h1 className="ms-5 me-5">Zavya</h1>
          <h1 className="ms-5 me-5">Samosa Pary</h1>
          <h1 className="ms-5 me-5">Pilgrim</h1>
          <h1 className="ms-5 me-5">Aroka</h1>
          <h1 className="ms-5 me-5">The Whole Truth </h1>
        </Marquee>
      </div>

      <div className="home-container-3 pt-5">
        <div className="left-part">
          <p>
            D2C brands face issues with supply chain management and high growth
            startups are not equipped to run their demand forecast manually.
            CleverBooks automates all the workflows and helps brands predict
            high demand periods and be ready to cater to customer demands. It
            has a direct impact on the revenue readiness of a company and that's
            the value we see CleverBooks unlocking for many companies in the
            future. Rahul and team have built a robust product with years of
            their experience distilled into the workflows.
          </p>
          <div className="founder-div">
            <div className="founder-details">
              <img src="/founder4.webp" alt="founder" />
              <div className="details">
                <h4>Diksha Pande</h4>
                <p>Co-founder, Samosa Party</p>
              </div>
            </div>
            <div className="samosa-party">
              <img src="/samosa.svg" alt="" width="200px" />
            </div>
          </div>
          <div className="btn-part">
            <div className="btn">
              <h1>upto 95%</h1>
              <p>Demand Fulfillment</p>
            </div>
            <div className="btn">
              <h1>{"<"}3%</h1>
              <p>Daily Stock-out</p>
            </div>
            <button className="button">
              <p>Read Story </p>
              <p>
                <MdOutlineArrowRightAlt className="fs-2" />
              </p>
            </button>
          </div>
        </div>
        <div className="right-part">
          <img src="/samosatub.webp" alt="" />
        </div>
      </div>

      <h1 className="title-4">Things your spreadsheet wishes it could do</h1>
      <div className="home-container-4">
        <div className="left-part">
          <Accordion>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  HELIX: Workflow Automation
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat
                  occaecat ut occaecat consequat est minim minim esse tempor
                  laborum consequat esse adipisicing eu reprehenderit enim.
                </p>
                <p>
                  Learn More <MdOutlineArrowRightAlt />{" "}
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  Automated Purchase Planning
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  In ad velit in ex nostrud dolore cupidatat consectetur ea in
                  ut nostrud velit in irure cillum tempor laboris sed
                  adipisicing eu esse duis nulla non.
                </p>
                <p>
                  Learn more <MdOutlineArrowRightAlt />{" "}
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  Automated Distribution Planning
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  In ad velit in ex nostrud dolore cupidatat consectetur ea in
                  ut nostrud velit in irure cillum tempor laboris sed
                  adipisicing eu esse duis nulla non.
                </p>
                <p>
                  Learn more <MdOutlineArrowRightAlt />{" "}
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>Easy Integration</AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  In ad velit in ex nostrud dolore cupidatat consectetur ea in
                  ut nostrud velit in irure cillum tempor laboris sed
                  adipisicing eu esse duis nulla non.
                </p>
                <p>
                  Learn more <MdOutlineArrowRightAlt />{" "}
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>Custom Dashboard</AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  In ad velit in ex nostrud dolore cupidatat consectetur ea in
                  ut nostrud velit in irure cillum tempor laboris sed
                  adipisicing eu esse duis nulla non.
                </p>
                <p>
                  Learn more <MdOutlineArrowRightAlt />{" "}
                </p>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="right-part">
          <div className="img">
            <img src="/home3.webp" alt="" />
          </div>
        </div>
      </div>
      <div className="btn-4">
        <button className="mb-4">View all features</button>
      </div>

      <div className="home-container-5">
        <h1>Get Cleverbooks and get...</h1>
        <Slider {...settings}>
          <div className="item">
            <SliderCard />
          </div>
          <div className="item">
            <SliderCard />
          </div>
          <div className="item">
            <SliderCard />
          </div>
        </Slider>
      </div>

      <div className="home-container-6">
        <div className="left">
          <img src="/home1.webp" alt="" />
        </div>
        <div className="right">
          <h3>From the founders</h3>
          <p>
            We are a young company solving an age-old problem: Supply Chain. Our
            goal is simple: to eradicate stock outs for businesses that want to
            grow faster. Our background, tech expertise, and empathy allow us to
            do just that.{" "}
          </p>
          <p>
            Thank you for checking out Crest, and we hope to help you always be
            in stock!
          </p>
          <button className="button">Learn more</button>
        </div>
      </div>

      <div className="home-container-7">
        <div className="left">
          <h2>Delivered:</h2>
          <h2>The Cleverbook blog</h2>
          <p>
            Insights from years of working in various supply-chain roles (and an
            itch to write). We hope you find these posts interesting!
          </p>

          <button>View all blogs</button>
        </div>
        <div className="right">
          <Slider {...settings2}>
            <div className="item2">
              <BlogCard />
            </div>
            <div className="item2">
              <BlogCard />
            </div>
            <div className="item2">
              <BlogCard />
            </div>
            <div className="item2">
              <BlogCard />
            </div>
            <div className="item2">
              <BlogCard />
            </div>
            <div className="item2">
              <BlogCard />
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Home;
