import React from "react";
// import OurServicesHome from "../../components/OurServices/OurServicesHome";
import OurServices from "../../components/OurServices/OurServices/OurServices";
import ContactCompany from "../../components/Contact/ContactCompany/ContactCompany";
import OurServicesEmail from "../../components/OurServices/OurServicesEmail/OurServicesEmail";
import HeroMain from "../../layouts/HeroMain";

export default function OurServicesMain() {
  return (
    <div className="ourServicesMain">
      <div className="ourServicesMain__home">
        {/* <OurServicesHome /> */}
        <HeroMain/>
      </div>
      <div className="ourServicesMain__OurServices">
        <OurServices />
      </div>
      <div className="ourServicesMain__ourServicesEmail">
        <OurServicesEmail />
      </div>
      <div className="ourServicesMain__OurServicesCompany">
        <ContactCompany />
      </div>
    </div>
  );
}
