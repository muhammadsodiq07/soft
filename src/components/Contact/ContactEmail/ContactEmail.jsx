import React from "react";
import "./ContactEmail.scss";

export default function ContactEmail() {
  return (
    <div className="contactEmail">
      <div className="container">
        <div className="contactEmail__main">
          <div className="contactEmail__box">
            <div className="contactEmail__title-div">
              <span className="contactEmail__title-span">Price Table</span>
              <h4 className="contactEmail__title">Our Price Plan</h4>
            </div>
            <form
              className="contactEmail__form"
              action="https://echo.htmlacademy.ru"
            >
              <div className="contactEmail__from-div">
                <div className="contactEmail__input-div" data-aos="fade-up">
                  <input
                    className="contactEmail__input"
                    type="text"
                    required
                    placeholder="Your Name"
                  />
                </div>
                <div
                  className="contactEmail__input-div contactEmail__input-div-second"
                  data-aos="fade-up"
                >
                  <input
                    className="contactEmail__input"
                    type="text"
                    required
                    placeholder="Email Address"
                  />
                </div>
              </div>
              <div
                className="contactEmail__input-div contactEmail__input-div-selcect"
                data-aos="fade-up"
              >
                <input
                  className="contactEmail__input-select"
                  type="text"
                  required
                  placeholder="Select Subject"
                />
              </div>
              <div
                className="contactEmail__input-div contactEmail__input-div-selcect"
                data-aos="fade-up"
              >
                <textarea
                  className="contactEmail__input-textarea"
                  type="text"
                  placeholder="Type Your Message"
                />
              </div>
              <div className="contactEmail__button">
                <button className="contactEmail__btn" data-aos="fade-up">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
