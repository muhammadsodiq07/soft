import React from "react";
import PortfolioHero from "./PortfolioHero/PortfolioHero";
import "./PortfolioHome.scss";

export default function PortfolioHome() {
  return (
    <div className="portfolioHome">
      <div className="portfolioHome__bg">
        <div className="container">
          <div className="portfolioHome__main">
            <div className="portfolioHome__hero">
              <PortfolioHero />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
