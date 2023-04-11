import React from "react";
// import TeamHome from "../../components/Team/TeamHome";
import TeamBlog from "../../components/Team/TeamBlog/TeamBlog";
import ContactCompany from "../../components/Contact/ContactCompany/ContactCompany";
import HeroMain from "../../layouts/HeroMain";

export default function TeamMain() {
  return (
    <div className="teamMain">
      <div className="teamMain__home">
        {/* <TeamHome /> */}
        <HeroMain/>
      </div>
      <div className="teamMain__home">
        <TeamBlog />
      </div>
      <div className="teamMain__home">
        <ContactCompany />
      </div>
    </div>
  );
}
