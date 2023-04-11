import React from "react";
import { AiFillStar } from "react-icons/ai";
import { HiOutlineChevronDoubleLeft } from "react-icons/hi";
import { HiOutlineChevronDoubleRight } from "react-icons/hi";
import appleIcon from "../../../assets/images/iconApple.svg";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/core";
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";
import "./Customer.scss";

export default function Customer() {
  const customerArr = [
    {
      id: 1,
      name: "Emma Watson",
      img: "https://images.mubicdn.net/images/cast_member/23751/cache-2603-1627313155/image-w856.jpg?size=800x",
    },
    {
      id: 2,
      name: "Emma Watson",
      img: "https://images.mubicdn.net/images/cast_member/23751/cache-2603-1627313155/image-w856.jpg?size=800x",
    },
    {
      id: 3,
      name: "Emma Watson",
      img: "https://images.mubicdn.net/images/cast_member/23751/cache-2603-1627313155/image-w856.jpg?size=800x",
    },
  ];

  return (
    <div className="customer">
      <div className="customer__bg">
        <div className="container">
          <div className="customer__main">
            <div className="customer__dflex-title">
              <div className="customer__title-div">
                <span className="customer__title-span">
                  Our Customer Testimonial
                </span>
                <h4 className="customer__title">Customer’s Feedbacks</h4>
              </div>
            </div>
            <ul className="customer__list">
              <Splide
                hasTrack={false}
                aria-label="..."
                options={{
                  perPage: 2,
                }}
              >
                <div className="splide__arrows">
                  <button className="splide__arrow splide__arrow--prev">
                    <HiOutlineChevronDoubleLeft className="customer__left-slider" />
                  </button>
                  <button className="splide__arrow splide__arrow--next">
                    <HiOutlineChevronDoubleRight />
                  </button>
                </div>
                <SplideTrack>
                  {customerArr.map((item, index) => (
                    <SplideSlide key={index}>
                      <div className="customer__item">
                        <div className="customer__inner-div">
                          <div className="customer__inner-title-div">
                            <div className="customer__img-div">
                              <img src={item.img} alt="" />
                            </div>
                            <div className="customer__inner-name-div">
                              <p className="customer__inner-name">
                                {item.name}
                              </p>
                              <span className="customer__inner-span">
                                Manager at <span>Apple</span>
                              </span>
                            </div>
                          </div>
                          <p className="customer__inner-text">
                            ”Quam conubia venenatis nullam nisi bibendum posuere{" "}
                            <br /> ligula urna. Netus partent morbi convallis
                            cum habitasse <br /> mauris arcu taciti magna orci
                            primis”
                          </p>
                          <span className="customer__hr"></span>
                          <div className="customer__botton-div">
                            <div className="customer__star-div">
                              <AiFillStar
                                className="customer__star-icon"
                                color="#3b38eb"
                              />
                              <AiFillStar
                                className="customer__star-icon"
                                color="#3b38eb"
                              />
                              <AiFillStar
                                className="customer__star-icon"
                                color="#3b38eb"
                              />
                              <AiFillStar
                                className="customer__star-icon"
                                color="#3b38eb"
                              />
                              <AiFillStar
                                className="customer__star-icon"
                                color="#3b38eb"
                              />
                            </div>
                            <div className="customer__apple-div">
                              <img src={appleIcon} alt="" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </SplideSlide>
                  ))}
                </SplideTrack>
              </Splide>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
