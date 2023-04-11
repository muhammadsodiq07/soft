import React from "react";
import "./OurServicesEmail.scss";

export default function OurServicesEmail() {
  return (
    <div className="OurServicesEmail">
      <div className="OurServicesEmail__bg">
        <div className="container">
          <div className="OurServicesEmail__main">
            <div className="OurServicesEmail__dflex">
              <div className="OurServicesEmail__left-div">
                <span className="OurServicesEmail__left-span">
                  Simple Easy Quick Steps
                </span>
                <h4 className="OurServicesEmail__left-title">
                  Have any project in <br /> your mind?
                </h4>
              </div>
              <div className="OurServicesEmail__right-div">
                <div className="OurServicesEmail__right-inner">
                  <div className="OurServicesEmail__inner-box">
                    <span className="OurServicesEmail__inner-span">
                      Mail us anytime
                    </span>
                    <p className="OurServicesEmail__inner-text">
                      info@example.com
                    </p>
                  </div>
                  <span className="OurServicesEmail__hr"></span>
                  <div className="OurServicesEmail__inner-box-right">
                    <span className="OurServicesEmail__inner-span">
                      Mail us anytime
                    </span>
                    <p className="OurServicesEmail__inner-text">
                      info@example.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
