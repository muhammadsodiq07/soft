import React, { useState } from "react";
import PortfolioButtons from "./PortfolioButtons/PortfolioButtons";
import "./PortfolioProjects.scss";

export default function PortfolioProjects({
  newArr,
  setNewArr,
  portfolioProjectsDate,
}) {
  const [buttonArr, setbuttonArr] = useState([
    {
      id: 1,
      name: "All",
      active: true,
    },
    {
      id: 2,
      name: "Web-site",
      active: false,
    },
    {
      id: 3,
      name: "App",
      active: false,
    },
    {
      id: 4,
      name: "Desing",
      active: false,
    },
    {
      id: 5,
      name: "UI/UX",
      active: false,
    },
  ]);

  let typeArr = ["All", "web", "app", "desing", "ui"];

  return (
    <div className="portfolioProjects">
      <div className="container">
        <ul className="portfolioButtons__list">
          {buttonArr.map((item, index) => {
            return (
              <PortfolioButtons
                key={index}
                item={item}
                portfolioProjectsDate={portfolioProjectsDate}
                id={typeArr[index]}
                newArr={newArr}
                buttonArr={buttonArr}
                setbuttonArr={setbuttonArr}
                setNewArr={setNewArr}
              />
            );
          })}
        </ul>
        {/* <PortfolioButtons /> */}
        <div className="portfolioProjects__main">
          <ul className="portfolioProjects__list">
            {newArr.map((item, index) => (
              <li
                className="portfolioProjects__item"
                key={index}
                data-aos="fade-up"
              >
                <div className="portfolioProjects__img-div">
                  <img src={item.img} alt="" />
                </div>
                <div className="portfolioProjects__title-div">
                  <h4 className="portfolioProjects__title">
                    {item.name} {item.id}
                  </h4>
                  <span className="portfolioProjects__span">{item.text}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
