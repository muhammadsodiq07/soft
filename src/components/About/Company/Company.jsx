import React from "react";
import blog1 from "../../../assets/images/blog1.svg";
import blog2 from "../../../assets/images/blog2.svg";
import blog3 from "../../../assets/images/blog3.svg";
import blog4 from "../../../assets/images/blog4.svg";
import blog5 from "../../../assets/images/blog5.svg";
import "aos/dist/aos.css";
import "./Company.scss";

export default function Company() {
  const company = [
    {
      id: 1,
      img: blog1,
    },
    {
      id: 2,
      img: blog2,
    },
    {
      id: 3,
      img: blog3,
    },
    {
      id: 4,
      img: blog4,
    },
    {
      id: 5,
      img: blog5,
    },
    {
      id: 6,
      img: blog1,
    },
    {
      id: 7,
      img: blog2,
    },
    {
      id: 8,
      img: blog3,
    },
    {
      id: 9,
      img: blog4,
    },
    {
      id: 10,
      img: blog5,
    },
    {
      id: 11,
      img: blog1,
    },
    {
      id: 12,
      img: blog2,
    },
    {
      id: 13,
      img: blog3,
    },
    {
      id: 14,
      img: blog4,
    },
    {
      id: 15,
      img: blog5,
    },
  ];

  return (
    <div className="company">
      <div className="container">
        <div className="company__main">
          <ul className="company__list">
            {company.map((item, index) => (
              <li className="company__item" key={index}  data-aos="fade-up">
                <div className="company__img-div">
                  <img src={item.img} alt="" />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
