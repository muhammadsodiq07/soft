import React from "react";
import TeamHero from "./TeamHero/TeamHero";
import "./TeamHome.scss";

export default function TeamHome() {
  return (
    <div className="teamHome">
      <div className="teamHome__bg">
        <div className="container">
          <div className="teamHome__main">
            <div className="teamHome__hero">
              <TeamHero />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
