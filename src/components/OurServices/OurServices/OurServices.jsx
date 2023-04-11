import React from "react";
import { HiOutlineChevronDoubleRight } from "react-icons/hi";
import serviceOne from "../../../assets/images/serviceOne.svg";
import serviceTwo from "../../../assets/images/serviceTwo.svg";
import serviceThree from "../../../assets/images/serviceThere.svg";
import serviceFour from "../../../assets/images/serviceFour.svg";
import serviceFive from "../../../assets/images/serviceFive.svg";
import serviceSix from "../../../assets/images/serviceSix.svg";
import serviceSeven from "../../../assets/images/serviceSeven.svg";
import serviceEight from "../../../assets/images/serviceEhight.svg";
import "./OurServices.scss";

export default function OurServices() {
  const serviceArray = [
    {
      id: "1",
      title: "Product Design",
      text: "Nisullam congue rhoncus risus dapibus habitant mauris eget ante pharetra.",
      iconImage: serviceOne,
    },
    {
      id: "2",
      title: "Digital Marketing",
      text: "Nisullam congue rhoncus risus dapibus habitant mauris eget ante pharetra.",
      iconImage: serviceTwo,
    },
    {
      id: "3",
      title: "Web Development",
      text: "Nisullam congue rhoncus risus dapibus habitant mauris eget ante pharetra.",
      iconImage: serviceThree,
    },
    {
      id: "4",
      title: "Technology Solution",
      text: "Nisullam congue rhoncus risus dapibus habitant mauris eget ante pharetra.",
      iconImage: serviceFour,
    },
    {
      id: "5",
      title: "Business Solution",
      text: "Nisullam congue rhoncus risus dapibus habitant mauris eget ante pharetra.",
      iconImage: serviceFive,
    },
    {
      id: "6",
      title: "Creative Layout",
      text: "Nisullam congue rhoncus risus dapibus habitant mauris eget ante pharetra.",
      iconImage: serviceSix,
    },
    {
      id: "7",
      title: "Content strategy",
      text: "Nisullam congue rhoncus risus dapibus habitant mauris eget ante pharetra.",
      iconImage: serviceSeven,
    },
    {
      id: "8",
      title: "Product Design",
      text: "Nisullam congue rhoncus risus dapibus habitant mauris eget ante pharetra.",
      iconImage: serviceEight,
    },
  ];
  return (
    <div className="ourServices">
      <div className="container">
        <div className="ourServices__main">
          <ul className="ourServices__list">
            {serviceArray.map((item, index) => (
              <li className="ourServices__item" key={index}>
                <div className="ourServices__inner-div">
                  <div className="ourServices__inner-imgDiv">
                    <img
                      className="ourServices__img"
                      src={item.iconImage}
                      alt=""
                    />
                  </div>
                  <p className="ourServices__inner-title">{item.title}</p>
                  <span className="ourServices__inner-span">{item.text}</span>
                  <div className="ourServices__innerDiv-box">
                    <span>
                      Learn More <HiOutlineChevronDoubleRight />
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
