/* eslint-disable array-callback-return */
import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import "./GetFaq.scss";

export default function GetFaq() {
  const [faqArr, setfaqArr] = useState([
    {
      id: 1,
      number: "01",
      title: "What should i included my personal details?",
      text: "Neque partrient sed nascetur facilisis suscipit ridiculus magna lobortis imperdiet vivamus est aliquam euismod nector quam convallis ornare justo service visionary sources unleash online",
      active: false,
    },
    {
      id: 2,
      number: "02",
      title: "What should i included my personal details?",
      text: "Neque partrient sed nascetur facilisis suscipit ridiculus magna lobortis imperdiet vivamus est aliquam euismod nector quam convallis ornare justo service visionary sources unleash online",
      active: false,
    },
    {
      id: 3,
      number: "03",
      title: "What should i included my personal details?",
      text: "Neque partrient sed nascetur facilisis suscipit ridiculus magna lobortis imperdiet vivamus est aliquam euismod nector quam convallis ornare justo service visionary sources unleash online",
      active: false,
    },
    {
      id: 4,
      number: "04",
      title: "What should i included my personal details?",
      text: "Neque partrient sed nascetur facilisis suscipit ridiculus magna lobortis imperdiet vivamus est aliquam euismod nector quam convallis ornare justo service visionary sources unleash online",
      active: false,
    },
  ]);

  const accardionHandler = (id) => {
    faqArr.map((item) => {
      if (item.id === id) {
        item.active = true;
      } else {
        item.active = false;
      }
    });
    setfaqArr([...faqArr]);
  };

  return (
    <div className="getFaq">
      <div className="container">
        <div className="getFaq__main">
          <div className="getFaq__left">
            <span className="getFaq__span">Check Our Faq</span>
            <h2 className="getFaq__title">Get every business answer from us</h2>
            <ul className="getFaq__left-list">
              {faqArr.map((item, index) => (
                <li
                  className={`getFaq__left-item ${
                    item.active ? "getFaq__activeHeight" : "getFaq__left-item"
                  }`}
                  key={index}
                  onClick={() => accardionHandler(item.id)}
                >
                  <div className="getFaq__main-inner">
                    <div className="getFaq__dflex">
                      <div className="getFaq__inner-div">
                        <span>{item.number}.</span>
                        <p>{item.title}</p>
                      </div>
                      {item.active ? (
                        <FiChevronUp onClick={() => accardionHandler(false)} />
                      ) : (
                        <FiChevronDown
                          onClick={() => accardionHandler(item.id)}
                        />
                      )}
                    </div>
                    <span
                      className={`getFaq__text-span ${
                        item.active ? "getFaq__text-span-active" : ""
                      }`}
                    >
                      {item.text}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="getFaq__right">
            <img
              src="https://mediapool.bmwgroup.com/cache/P9/202106/P90428171/P90428171-bmw-x5-black-vermilion-edition-07-2021-2250px.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
