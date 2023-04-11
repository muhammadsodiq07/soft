import React from "react";
import "./HomeMain.scss";
import Home from "../../components/Home/Home";
import Team from "../../components/Home/Team/Team";
import Blog from "../../components/Home/Blog/Blog";
import Service from "../../components/Home/Service/Service";
import Statistik from "../../components/Home/Statistik/Statistik";
import MoreAboutUs from "../../components/Home/MoreAboutUs/MoreAboutUs";
import SuccessfulProject from "../../components/Home/SuccessfulProject/SuccessfulProject";
import HomePortfolio from "../../components/Home/HomePortfolio/HomePortfolio";
import AboutWorkProcess from "../../components/About/AboutWorkProcess/AboutWorkProcess";

export default function HomeMain() {
  return (
    <div className="homeMain">
      <div className="homeMain__home">
        <Home />
      </div>
      <div className="homeMain__workProcess">
        {/* <WorkProcess /> */}
        <AboutWorkProcess />
      </div>
      <div className="homeMain__statistik">
        <Statistik />
      </div>
      <div className="homeMain__moreAboutUs">
        <MoreAboutUs />
      </div>
      <div className="homeMain__service">
        <Service />
      </div>
      <div className="homeMain__team">
        <Team />
      </div>
      <div className="homeMain__team">
        <HomePortfolio />
      </div>
      {/* <div className="homeMain__customer">
        <Customer />
      </div> */}
      <div className="homeMain__blog">
        <Blog />
      </div>
      <div className="homeMain__successfulProject">
        <SuccessfulProject />
      </div>
    </div>
  );
}
