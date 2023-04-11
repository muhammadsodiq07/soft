import React from "react";
// import ContactHome from "../../components/Contact/ContactHome";
import ContactMap from "../../components/Contact/ContactMap/ContactMap";
import ContactCall from "../../components/Contact/ContactCall/ContactCall";
import ContactEmail from "../../components/Contact/ContactEmail/ContactEmail";
import ContactCompany from "../../components/Contact/ContactCompany/ContactCompany";
import "./ContactMain.scss";
import HeroMain from "../../layouts/HeroMain";

export default function ContactMain() {
  return (
    <div className="contactMain">
      <div className="contactMain__home">
        {/* <ContactHome /> */}
        <HeroMain/>
      </div>
      <div className="contactMain__">
        <ContactCall />
      </div>
      <div className="contactMain__map">
        <ContactMap />
      </div>
      <div className="contactMain__emial">
        <ContactEmail />
      </div>
      <div className="contactMain__emial">
        <ContactCompany />
      </div>
    </div>
  );
}
