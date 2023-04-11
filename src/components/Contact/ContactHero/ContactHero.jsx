import React from "react";
import "./ContactHero.scss";

export default function ContactHero() {
  return (
    <div className="contactHero">
      <div className="contactHero__main">
        <h2 className="contactHero__title">Contact Us</h2>
        <p className="contactHero__text">
          Home / <span>Contact Us</span>
        </p>
      </div>
    </div>
  );
}
