import React from "react";
import "./AboutHero.scss";

export default function AboutHero() {
  return (
    <div className="aboutHero">
      <div className="aboutHero__main">
        <div className="aboutHero__flex-div">
          <p className="aboutHero__text" data-aos="zoom-in">
            Home / <span>About Us</span>
          </p>
          <h2 className="aboutHero__title" data-aos="fade-up">
            About Us
          </h2>
        </div>
      </div>
    </div>
  );
}
