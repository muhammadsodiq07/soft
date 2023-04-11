import React from "react";
import Hero from "./Hero/Hero";
import "./Home.scss";

export default function Home() {
  return (
    <div className="home">
      <div className="container">
        <div className="home__main">
          <div className="home__hero">
            <Hero />
          </div>
        </div>
      </div>
    </div>
  );
}
