/* eslint-disable array-callback-return */
import React, { useState } from "react";
import { FaTwitter } from "react-icons/fa";
import { GrFacebookOption } from "react-icons/gr";
import { GrLinkedinOption } from "react-icons/gr";
import { HiOutlinePlusSm } from "react-icons/hi";
import "./TeamBlog.scss";

export default function TeamBlog() {
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
      name: "Emma Watson",
      img: "https://images.mubicdn.net/images/cast_member/23751/cache-2603-1627313155/image-w856.jpg?size=800x",
      job: "Desing",
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
    {
      id: 5,
      name: "KMM",
      img: "https://files.sbcdnsb.com/images/G-fSAmDAflRspM5kyaEm1g/businesses/1630498082/KMMlogo-withbackground0.png",
      job: "Front-end devloper",
      active: false,
    },
    {
      id: 6,
      name: "Emma Watson",
      img: "https://images.mubicdn.net/images/cast_member/23751/cache-2603-1627313155/image-w856.jpg?size=800x",
      job: "Desing",
      active: false,
    },
    {
      id: 7,
      name: "KMM",
      img: "https://static.vecteezy.com/system/resources/previews/010/193/859/original/kmm-letter-logo-design-on-black-background-kmm-creative-initials-letter-logo-concept-kmm-letter-design-vector.jpg",
      job: "Front-end devloper",
      active: false,
    },
    {
      id: 8,
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
    <div className="teamBlog">
      <div className="container">
        <div className="teamBlog__main">
          <div className="teamBlog__titel-div">
            <span className="teamBlog__title-sapn">Team Members</span>
            <h4 className="teamBlog__title">Meet Our Team</h4>
          </div>
          <ul className="teamBlog__list">
            {aboutTeamArr.map((item, index) => (
              <li className="teamBlog__item" key={index}>
                <div className="teamBlog__img-div">
                  <img src={item.img} alt="" />
                </div>
                <span
                  className="teamBlog__inner-plus-span"
                  onClick={() => handlerHover(item.id)}
                >
                  <HiOutlinePlusSm className="teamBlog__plus" />
                </span>
                {item.active ? (
                  <div className="teamBlog__inner-icons-div">
                    <span className="teamBlog__inner-span-hover">
                      <GrLinkedinOption className="teamBlog__inner-linkedin" />
                    </span>
                    <span className="teamBlog__inner-span-hover">
                      <FaTwitter className="teamBlog__inner-twitter" />
                    </span>
                    <span className="teamBlog__inner-span-hover">
                      <GrFacebookOption className="teamBlog__inner-facebook" />
                    </span>
                  </div>
                ) : (
                  ""
                )}
                <div className="teamBlog__inner-div">
                  <p className="teamBlog__inner-name">{item.name}</p>
                  <span className="teamBlog__inner-span">{item.job}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
