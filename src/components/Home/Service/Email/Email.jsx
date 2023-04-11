import React from "react";
import emailIcon from "../../../../assets/images/email.svg";
import "./Email.scss";

export default function Email() {
  return (
    <section id="email">
      <div className="email">
        <div className="email__main">
          <div className="email__inner-div">
            <div className="email__left" data-aos="fade-right">
              <span className="email__title-span">Get in touch</span>
              <h4 className="email__title">
                Have Any Project Plan <br /> In Your Mind?
              </h4>
              <p className="email__text">
                Parturient gravida dis auctor augue vivamus cras pellentesque
                hac, <br />
                vametus tortor aptent turpis nam. Etiam integer eros pulvinar
                fusce <br /> justo nam phasellus consequat sagittis parturient.
              </p>
              <div className="email__mail-div">
                <span className="email__mail-span">
                  <img className="email__iconSend" src={emailIcon} alt="" />
                </span>
                <div className="email__mail-text-div">
                  <span className="email__mail-us">Mail us 24/7:</span>
                  <p className="email__mail-text">hello.mail@gmail.com</p>
                </div>
              </div>
              <div className="email__phone-div">
                <span className="email__mail-span">
                  <img className="email__iconSend" src={emailIcon} alt="" />
                </span>
                <div className="email__mail-text-div">
                  <span className="email__mail-us">Mail us 24/7:</span>
                  <p className="email__mail-text">hello.mail@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="email__right" data-aos="fade-left">
              <form
                action="https://echo.htmlacademy.ru"
                className="email__form"
              >
                <div className="email__form-div">
                  <span className="email__form-span">Your Name*</span>
                  <input type="text" className="email__form-input" required />
                </div>
                <div className="email__formEmail-div">
                  <span className="email__form-span">Phone number*</span>
                  <input type="number" className="email__form-input" required />
                </div>
                <div className="email__formTextarea-div">
                  <span className="email__form-span">How can we help you?</span>
                  <textarea type="text" className="email__form-textarea" />
                </div>
                <div className="email__button-div">
                  <button className="email__btn" type="sumbit">
                    Submit Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
