/* eslint-disable no-sequences */
/* eslint-disable array-callback-return */
import React from "react";
// import portfolioProjectsDate from "../../../../portfolioProjectDate";
import "./PortfolioButtons.scss";

export default function PortfolioButtons({
  id,
  item,
  index,
  setNewArr,
  buttonArr,
  setbuttonArr,
  portfolioProjectsDate,
}) {
  // const [buttonArr, setbuttonArr] = useState([
  //   {
  //     id: 1,
  //     name: "All Projects",
  //     active: true,
  //   },
  //   {
  //     id: 2,
  //     name: "Business",
  //     active: false,
  //   },
  //   {
  //     id: 3,
  //     name: "Solution",
  //     active: false,
  //   },
  //   {
  //     id: 4,
  //     name: "Marketing",
  //     active: false,
  //   },
  //   {
  //     id: 5,
  //     name: "Development",
  //     active: false,
  //   },
  // ]);

  const typeHandler = (e) => {
    let btnValue = e.target.textContent;
    if (btnValue === "All") {
      setNewArr(portfolioProjectsDate);
    } else if (e.target.id === "web") {
      setNewArr(
        portfolioProjectsDate.filter((item) => {
          return item.type === e.target.id;
        })
      );
    } else if (e.target.id === "app") {
      setNewArr(
        portfolioProjectsDate.filter((item) => {
          return item.type === e.target.id;
        })
      );
    } else if (e.target.id === "desing") {
      setNewArr(
        portfolioProjectsDate.filter((item) => {
          return item.type === e.target.id;
        })
      );
    } else if (e.target.id === "ui") {
      setNewArr(
        portfolioProjectsDate.filter((item) => {
          return item.type === e.target.id;
        })
      );
    }
  };

  const handlerHover = (id) => {
    buttonArr.map((item) => {
      if (item.id === id) {
        item.active = true;
      } else {
        item.active = false;
      }
    });
    setbuttonArr([...buttonArr]);
  };

  return (
    <div className="portfolioButtons">
      <div className="portfolioButtons__main">
        <ul className="portfolioButtons__list">
          {/* {buttonArr.map((item, index) => ( */}
          <li
            className="portfolioButtons__item"
            key={index}
            id={id}
            onClick={() => (handlerHover(item.id), typeHandler())}
            data-aos="fade-up"
          >
            <button
              className={`${
                item.active
                  ? "portfolioButtons__btn-hover"
                  : "portfolioButtons__btn"
              }`}
              onClick={typeHandler}
              id={id}
            >
              {item.name}
            </button>
          </li>
          {/* ))} */}
        </ul>
      </div>
    </div>
  );
}
