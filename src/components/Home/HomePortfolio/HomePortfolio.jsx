import React from "react";
import { Link } from "react-router-dom";
import "./HomePortfolio.scss";

export default function HomePortfolio() {
  const array = [
    {
      id: 1,
      title: "Car services",
      text: "Website",
    },
    {
      id: 2,
      title: "Avtoritet",
      text: "Mobile App",
    },
    {
      id: 3,
      title: "Carwash admin",
      text: "Website",
    },
    {
      id: 4,
      title: "Admin panel",
      text: "CRM",
    },
    {
      id: 5,
      title: "Car services",
      text: "Website",
    },
  ];

  return (
    <div className="homePortfolio">
      <div className="container">
        <div className="homePortfolio__main">
          <div className="homePortfolio__title-div">
            <div className="homePortfolio__title-left">
              <h3 className="homePortfolio__title">PORTFOLIO</h3>
            </div>
            <div className="homePortfolio__title-right">
              <ul className="homePortfolio__list-right">
                <li>CRM</li>
                <li>Website</li>
                <li>Mobile App</li>.
              </ul>
            </div>
          </div>
          <ul className="homePortfolio__list">
            {array.map((item, index) => (
              <Link to="/home/portfolio" key={index}>
                <li data-aos="fade-right" className="homePortfolio__item">
                  <div className="homePortfolio__inner-box">
                    <h4>{item.title}</h4>
                    <p>{item.text}</p>
                  </div>
                  <img
                    className="homePortfolio__img"
                    src="https://uic.group/media/cache/ff/10/ff10907d0f26768307ae76dfde44011c.jpg"
                    alt={item.title}
                  />
                </li>
              </Link>
            ))}
          </ul>
          {/* <div className="homePortfolio__button">
            <button>All Projects</button>
          </div> */}
        </div>
      </div>
    </div>
  );
}
