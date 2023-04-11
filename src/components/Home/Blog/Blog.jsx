import React from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { HiOutlineUser } from "react-icons/hi";
import "./Blog.scss";
import BlogCompany from "./BlogCompany/BlogCompany";



export default function Blog() {
  const blogArr = [
    {
      id: 1,
      img: "https://imgur.com/hbN1rUK.png",
      title: " Simple practices that will help you get better everyday",
      data: "15 Oct, 2022",
      admin: "by Admin",
    },
    {
      id: 2,
      img: "https://imgur.com/hbN1rUK.png",
      title: " Simple practices that will help you get better everyday",
      data: "15 Oct, 2022",
      admin: "by Admin",
    },
    {
      id: 3,
      img: "https://imgur.com/hbN1rUK.png",
      title: " Simple practices that will help you get better everyday",
      data: "15 Oct, 2022",
      admin: "by Admin",
    },
  ];

  return (
    <div className="blog">
      <div className="container">
        <div className="blog__main">
          <div className="blog__title-div">
            <span className="blog__title-span">Latest Posts</span>
            <h4 className="blog__title">Latest Blog Posts</h4>
          </div>
          <ul className="blog__list">
            {blogArr.map((item, index) => (
              <li className="blog__item" key={index} data-aos="fade-up">
                <div className="blog__inner-div">
                  <div className="blog__inner-img-div">
                    <img src={item.img} alt="" />
                  </div>
                  <p className="blog__inner-text">{item.title}</p>
                  <span className="blog__inner-hr"></span>
                  <div className="blog__inner-icon-div">
                    <div className="blog__inner-clock-div">
                      <AiOutlineClockCircle className="blog__inner-icon" />
                      <span className="blog__inner-icon-span">{item.data}</span>
                    </div>
                    <div className="blog__inner-user-div">
                      <HiOutlineUser className="blog__inner-icon-user" />
                      <span className="blog__inner-icon-span">
                        {item.admin}
                      </span>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <BlogCompany />
        </div>
      </div>
    </div>
  );
}
