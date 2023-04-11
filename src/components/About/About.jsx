import "./About.scss";
import React from "react";
import AboutHero from "./AboutHero/AboutHero";

export default function About() {
  return (
    <div className="about">
      <div className="about__bg">
        <div className="container">
          <div className="about__main">
            <div className="about__hero">
              <AboutHero />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
