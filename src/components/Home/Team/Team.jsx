import React from "react";
import { FaTwitter } from "react-icons/fa";
import { GrFacebookOption } from "react-icons/gr";
import { GrLinkedinOption } from "react-icons/gr";
import { Link } from "react-router-dom";
import "./Team.scss";

export default function Team() {
  const temaArr = [
    {
      id: 1,
      name: "KMM",
      jib: "Front-end developer",
      img: "https://imgur.com/3BQH36M.png",
    },
    {
      id: 2,
      name: "KMM",
      jib: "Front-end developer",
      img: "https://imgur.com/3BQH36M.png",
    },
    {
      id: 3,
      name: "KMM",
      jib: "Front-end developer",
      img: "https://imgur.com/3BQH36M.png",
    },
  ];

  return (
    <div className="team">
      <div className="container">
        <div className="team__main">
          <div className="team__title-div">
            <span className="team__title-span">How We Work</span>
            <p className="team__title">Meet Our Team</p>
          </div>
          <ul className="team__list">
            {temaArr.map((item, index) => (
              <li className="team__item" key={index} data-aos="fade-up">
                <Link to="/home/team">
                  <div className="team__image-div">
                    <img className="team__image" src={item.img} alt="" />
                  </div>
                  <div className="team__inner-box">
                    <div className="team__inner-hover">
                      <p className="team__inner-name">{item.name}</p>
                      <span className="team__inner-job">{item.jib}</span>
                      <div className="team__inner-icons-div">
                        <span className="team__inner-span-hover">
                          <GrFacebookOption className="team__inner-facebook" />
                        </span>
                        <span className="team__inner-span-hover">
                          <FaTwitter className="team__inner-twitter" />
                        </span>
                        <span className="team__inner-span-hover">
                          <GrLinkedinOption className="team__inner-linkedin" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
