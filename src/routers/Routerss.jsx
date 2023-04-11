import React from "react";
import FaqMain from "../pages/FaqMain/FaqMain";
import HomeMain from "../pages/Home/HomeMain";
import AboutMain from "../pages/About/AboutMain";
import { Route, Routes } from "react-router-dom";
import TeamMain from "../pages/TeamMain/TeamMain";
import PostMain from "../pages/PostMain/PostMain";
import ErrorMain from "../pages/ErrorMain/ErrorMain";
import ContactMain from "../pages/ContactMain/ContactMain";
import PortfolioMain from "../pages/PortfolioMain/PortfolioMain";
import OurServicesMain from "../pages/OurServices/OurServicesMain";
// import Blog from "../components/Home/Blog/Blog";

export default function Routerss() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomeMain />} />
        <Route path="/home" element={<HomeMain />} />
        <Route path="/faq" element={<FaqMain />} />
        <Route path="/about" element={<AboutMain />} />
        <Route path="/home/about" element={<AboutMain />} />
        <Route path="/team" element={<TeamMain />} />
        <Route path="/about/team" element={<TeamMain />} />
        <Route path="/home/team" element={<TeamMain />} />
        <Route path="/post" element={<PostMain />} />
        <Route path="/contact" element={<ContactMain />} />
        <Route path="/portfolio" element={<PortfolioMain />} />
        <Route path="/home/portfolio" element={<PortfolioMain />} />
        <Route path="/services" element={<OurServicesMain />} />
        <Route path="/home/services" element={<OurServicesMain />} />
        {/* <Route path="/blog" element={<Blog />} /> */}
        <Route path="/*" element={<ErrorMain />} />
      </Routes>
    </div>
  );
}
