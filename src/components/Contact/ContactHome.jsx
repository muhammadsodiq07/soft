import React from "react";
import ContactHero from "./ContactHero/ContactHero";
import "./ContactHome.scss"

export default function ContactHome() {
  return (
    <div className="contactHome">
      <div className="contactHome__bg">
        <div className="container">
          <div className="contactHome__main">
            <div className="contactHome__hero">
              <ContactHero />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
