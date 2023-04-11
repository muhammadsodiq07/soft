import React from "react";
import blog1 from "../../../../assets/images/blog1.svg";
import blog2 from "../../../../assets/images/blog2.svg";
import blog3 from "../../../../assets/images/blog3.svg";
import blog4 from "../../../../assets/images/blog4.svg";
import blog5 from "../../../../assets/images/blog5.svg";
import "./BlogCompany.scss";

export default function BlogCompany() {
  const blogCompany = [
    {
      id: 1,
      img: blog1,
    },
    {
      id: 1,
      img: blog2,
    },
    {
      id: 1,
      img: blog3,
    },
    {
      id: 1,
      img: blog4,
    },
    {
      id: 1,
      img: blog5,
    },
  ];

  return (
    <div className="blogCompany">
      <div className="blogCompany__main">
        <ul className="blogCompany__list">
          {blogCompany.map((item, index) => (
            <li className="blogCompany__item" key={index} data-aos="fade-up">
              <div className="blogCompany__img-div">
                <img src={item.img} alt="" />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
