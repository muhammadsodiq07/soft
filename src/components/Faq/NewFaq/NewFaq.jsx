import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./NewFaq.scss";

export default function NewFaq() {
  const arr = [
    {
      id: 1,
      post_name: "David Smith",
      date: "25 October, 2022",
      text: "Proin mauris risus turpis ornare felis aptent nisl lobortis",
      img: "https://wallpapers.com/images/hd/4k-bmw-in-underground-road-86owcoo79z8fo3ra.jpg",
    },
    {
      id: 2,
      post_name: "David Smith",
      date: "25 October, 2022",
      text: "Proin mauris risus turpis ornare felis aptent nisl lobortis",
      img: "https://wallpapers.com/images/hd/4k-bmw-in-underground-road-86owcoo79z8fo3ra.jpg",
    },
    {
      id: 3,
      post_name: "David Smith",
      date: "25 October, 2022",
      text: "Proin mauris risus turpis ornare felis aptent nisl lobortis",
      img: "https://wallpapers.com/images/hd/4k-bmw-in-underground-road-86owcoo79z8fo3ra.jpg",
    },
  ];

  return (
    <div className="newFaq">
      <div className="container">
        <div className="newFaq__main">
          <div className="newFaq__title-left">
            <span className="newFaq__span">Simple Easy Quick Steps</span>
            <h3 className="newFaq__title">Our Latest News</h3>
          </div>
          <div className="newFaq__title-right">
            <Link to="/postMain">
              <button type="button">View All Posts</button>
            </Link>
          </div>
        </div>
        <ul className="newFaq__list">
          {arr.map((item, index) => (
            <li className="newFaq__list" key={index}>
              <img className="newFaq__img" src={item.img} alt="" />
              <div className="newFaq__inner-main">
                <div className="newFaq__inner">
                  <img className="newFaq__inner-img" src={item.img} alt="" />
                  <div className="newFaq__name-inner">
                    <span>Post by</span>
                    <p>{item.post_name}</p>
                  </div>
                </div>
                <span className="newFaq__date">{item.date}</span>
                <p className="newFaq__text">{item.text}</p>
                <Link to="/postMain">
                  <p className="newFaq__read">
                    Read More <BsArrowRightShort />
                  </p>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
