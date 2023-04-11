/* eslint-disable array-callback-return */
import React, { useState } from "react";
import { FaTwitter } from "react-icons/fa";
import { GrFacebookOption } from "react-icons/gr";
import { GrLinkedinOption } from "react-icons/gr";
import { HiOutlinePlusSm } from "react-icons/hi";
import { Link } from "react-router-dom";
import "./AboutTeam.scss";

export default function AboutTeam() {
  const [aboutTeamArr, setAboutTeamArr] = useState([
    {
      id: 1,
      name: "KMM",
      img: "https://files.sbcdnsb.com/images/G-fSAmDAflRspM5kyaEm1g/businesses/1630498082/KMMlogo-withbackground0.png",
      job: "Front-end devloper",
      active: false,
    },
    {
      id: 2,
      name: "KMM",
      img: "https://imgur.com/Ci5bR2i.png",
      job: "Front-end devloper",
      active: false,
    },
    {
      id: 3,
      name: "KMM",
      img: "https://static.vecteezy.com/system/resources/previews/010/193/859/original/kmm-letter-logo-design-on-black-background-kmm-creative-initials-letter-logo-concept-kmm-letter-design-vector.jpg",
      job: "Front-end devloper",
      active: false,
    },
    {
      id: 4,
      name: "KMM",
      img: "https://files.sbcdnsb.com/images/G-fSAmDAflRspM5kyaEm1g/businesses/1630498082/KMMlogo-withbackground0.png",
      job: "Front-end devloper",
      active: false,
    },
  ]);

  const handlerHover = (id) => {
    aboutTeamArr.map((item) => {
      if (item.id === id) {
        item.active = true;
      } else {
        item.active = false;
      }
    });
    setAboutTeamArr([...aboutTeamArr]);
  };

  return (
    <div className="aboutTeam">
      <div className="container">
        <div className="aboutTeam__main">
          <div className="aboutTeam__titel-div">
            <span className="aboutTeam__title-sapn">Team Members</span>
            <h4 className="aboutTeam__title">Meet Our Team</h4>
          </div>
          <ul className="aboutTeam__list">
            {aboutTeamArr.map((item, index) => (
              <li className="aboutTeam__item" key={index} data-aos="fade-up">
                <Link to="/about/team">
                  <div className="aboutTeam__img-div">
                    <img src={item.img} alt="" />
                  </div>
                  <span
                    className="aboutTeam__inner-plus-span"
                    onClick={() => handlerHover(item.id)}
                  >
                    <HiOutlinePlusSm className="aboutTeam__plus" />
                  </span>
                  {item.active ? (
                    <div className="aboutTeam__inner-icons-div">
                      <span className="aboutTeam__inner-span-hover">
                        <GrLinkedinOption className="aboutTeam__inner-linkedin" />
                      </span>
                      <span className="aboutTeam__inner-span-hover">
                        <FaTwitter className="aboutTeam__inner-twitter" />
                      </span>
                      <span className="aboutTeam__inner-span-hover">
                        <GrFacebookOption className="aboutTeam__inner-facebook" />
                      </span>
                    </div>
                  ) : (
                    ""
                  )}
                  <div className="aboutTeam__inner-div">
                    <p className="aboutTeam__inner-name">{item.name}</p>
                    <span className="aboutTeam__inner-span">{item.job}</span>
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
