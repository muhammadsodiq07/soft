import React from "react";
import call from "../../../assets/images/contact/call.svg";
import "./ContactCall.scss";

export default function ContactCall() {
  return (
    <div className="contactCall">
      <div className="container">
        <div className="contactCall__main">
          <ul className="contactCall__list">
            <li className="contactCall__item" data-aos="fade-up">
              <div className="contactCall__img-div">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/010/193/859/original/kmm-letter-logo-design-on-black-background-kmm-creative-initials-letter-logo-concept-kmm-letter-design-vector.jpg"
                  alt=""
                />
              </div>
              <div className="contactCall__inner-div">
                <div className="contactCall__inner-img">
                  <img src={call} alt="" />
                </div>
                <div className="contactCall__right-div">
                  <span className="contactCall__span">Call Us 24/7</span>
                  <p className="contactCall__text">+584 (25) 21453</p>
                </div>
              </div>
            </li>
            <li className="contactCall__item" data-aos="fade-up">
              <div className="contactCall__img-div">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/010/193/859/original/kmm-letter-logo-design-on-black-background-kmm-creative-initials-letter-logo-concept-kmm-letter-design-vector.jpg"
                  alt=""
                />
              </div>
              <div className="contactCall__inner-div">
                <div className="contactCall__inner-img">
                  <img src={call} alt="" />
                </div>
                <div className="contactCall__right-div">
                  <span className="contactCall__span">Call Us 24/7</span>
                  <p className="contactCall__text">+584 (25) 21453</p>
                </div>
              </div>
            </li>
            <li className="contactCall__item" data-aos="fade-up">
              <div className="contactCall__img-div">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/010/193/859/original/kmm-letter-logo-design-on-black-background-kmm-creative-initials-letter-logo-concept-kmm-letter-design-vector.jpg"
                  alt=""
                />
              </div>
              <div className="contactCall__inner-div">
                <div className="contactCall__inner-img">
                  <img src={call} alt="" />
                </div>
                <div className="contactCall__right-div">
                  <span className="contactCall__span">Call Us 24/7</span>
                  <p className="contactCall__text">+584 (25) 21453</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
