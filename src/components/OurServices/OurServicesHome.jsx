import React from "react";
import OurServicesHero from "./OurServicesHero/OurServicesHero";
import "./OurServicesHome.scss";

export default function OurServicesHome() {
  return (
    <div className="OurServicesHome">
      <div className="OurServicesHome__bg">
        <div className="container">
          <div className="OurServicesHome__main">
            <div className="OurServicesHome__hero">
              <OurServicesHero />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
