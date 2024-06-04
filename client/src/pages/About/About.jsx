import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="upper-part">
        <h1>
          We're here to turn your supply <br />
          chain into a <span>superpower</span>
        </h1>
        <p>
          Crest is a company that brings together cutting-edge technology and
          deep supply chain expertise. The result is a tool that we ourselves
          wish we had in the beginning of our careers - automating demand /
          inventory tasks, generating insights, and helping your business
          expand.
        </p>
      </div>
      <div className="img-container">
        <img src="/about1.webp" alt="" width="100%" />
      </div>

      <div className="title about-title">
        <h2 className="text-dark text-center title2 pt-5">
          We are on a mission to make stock-outs go extinct so that no
          <br /> business would have to lose out on a customer.
        </h2>
      </div>
      <div className="about-card">
        <div className="left">
          <img src="/about2.webp" alt="" />
        </div>
        <div className="right">
          <h1>Why did we start Crest?</h1>
          <p>
            We increasingly observed how businesses have come to terms with
            stockouts as part of fate and struggle to compete against industry
            giants for either retail shelf space or an e-commerce cart. We have
            frequently heard business owners state – “There’s no point in
            automating and having a great performance marketing campaign if the
            product is out of stock or takes too long to reach the customer”. A
            wise man once said: solve for supply chain, and you’ve solved for
            your business (we might have made that one up, but it’s true!).
          </p>
        </div>
      </div>

      <div className="about-card about-card-2">
        <div className="right">
          <h1>Our belief</h1>
          <p>
            In light of increasing competition and rising customer acquisition
            costs, we believe that a sustainable firm can only be built if
            consumers are able to find a product when required. The businesses
            of tomorrow have unique requirements and challenges. Old concepts
            simply do not make it in this day and age of escalating customer
            demands and competition. Crest's easy-to-use interface provides you
            with relevant insights, task automation, and accurate forecasts. So
            you can spend less time on spreadsheets, and more time growing your
            business.
          </p>
        </div>
        <div className="left">
          <img src="/about2.webp" alt="" />
        </div>
      </div>

      <div className="founders">
        <h1 className="text-dark text-center">Our Founders</h1>

        <div className="founder-container">
          <div className="founder-card">
            <img src="/founder1.webp" alt="" />
            <div className="details">
              <h3>Rahul Vishwakarma</h3>
              <h4>CEO</h4>
            </div>
          </div>
          <div className="founder-card">
            <img src="/founder2.webp" alt="" />
            <div className="details">
              <h3>Akhil Kumar</h3>
              <h4>CGO</h4>
            </div>
          </div>
          <div className="founder-card">
            <img src="/founder3.webp" alt="" />
            <div className="details">
              <h3>Yogesh Byahatti</h3>
              <h4>CTO</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
