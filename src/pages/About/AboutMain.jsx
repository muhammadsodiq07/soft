import React from "react";
// import About from "../../components/About/About";
import AboutMoreUs from "../../components/About/AboutMoreUs/AboutMoreUs";
import AboutSuccessfulProject from "../../components/About/AboutSuccessfulProject/AboutSuccessfulProject";
import AboutTeam from "../../components/About/AboutTeam/AboutTeam";
import AboutWorkProcess from "../../components/About/AboutWorkProcess/AboutWorkProcess";
import Company from "../../components/About/Company/Company";
import HeroMain from "../../layouts/HeroMain";


export default function AboutMain() {
  return (
    <div className="aboutMain">
      <div className="aboutMain__main">
        <div className="about__main-about">
          {/* <About /> */}
          <HeroMain/>
        </div>
        <div className="about__main-aboutMoreUs">
          <AboutMoreUs />
        </div>
        <div className="about__main-company">
          <Company />
        </div>
        <div className="about__main-aboutWorkProcess">
          <AboutWorkProcess />
        </div>
        <div className="about__main-aboutSuccessfulProject">
          <AboutSuccessfulProject />
        </div>
        <div className="about__main-aboutTeam">
          <AboutTeam />
        </div>
        {/* <div className="about__main-aboutCostumer">
          <AboutCustomer />
        </div> */}
      </div>
    </div>
  );
}
