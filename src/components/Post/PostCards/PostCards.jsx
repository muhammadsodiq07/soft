import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineAccessTime } from "react-icons/md";
import "./PostCards.scss";

export default function PostCards({ newArr }) {
  return (
    <div className="postCards">
      <div className="container">
        <div className="postCards__main">
          <ul className="postCards__list">
            {newArr.map((item, index) => (
              <li className="postCards__item" key={index} data-aos="fade-up">
                <div className="postCards__img-div">
                  <img
                    src="https://files.sbcdnsb.com/images/G-fSAmDAflRspM5kyaEm1g/businesses/1630498082/KMMlogo-withbackground0.png"
                    alt=""
                  />
                </div>
                <div className="postCards__box">
                  <div className="postCards__inner-div">
                    <div className="postCards__icons-div">
                      <FaRegUserCircle className="postCards__icon" />
                      <span className="postCards__span">{item.name}</span>
                    </div>
                    <div className="postCards__icons-div">
                      <MdOutlineAccessTime className="postCards__icon" />
                      <span className="postCards__span">{item.day}</span>
                    </div>
                    <div className="postCards__icons-div">
                      <MdOutlineAccessTime className="postCards__icon" />
                      <span className="postCards__span">{item.info}</span>
                    </div>
                  </div>
                  <h4 className="postCards__title">{item.title}</h4>
                  <p className="postCards__text">{item.desc}</p>
                  <button className="postCards__btn">Read Details</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
