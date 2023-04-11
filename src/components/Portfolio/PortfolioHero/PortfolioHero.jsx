import React from "react";
import "./PortfolioHero.scss";

export default function PortfolioHero() {
  return (
    <div className="portfolioHero">
      <div className="portfolioHero__main">
        <h2 className="portfolioHero__title">Our Portfolio</h2>
        <p className="portfolioHero__text">
          Home / <span>Our Portfolio</span>
        </p>
      </div>
    </div>
  );
}
