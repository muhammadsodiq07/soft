import React from "react";
import { HiOutlineChevronDoubleRight } from "react-icons/hi";
import "./AboutSuccessfulProject.scss";

export default function AboutSuccessfulProject() {
  return (
    <div className="aboutSuccessfulProject">
      <div className="aboutSuccessfulProject__bg">
        <div className="container">
          <div className="aboutSuccessfulProject__main">
            <div className="aboutSuccessfulProject__title-div">
              <span className="aboutSuccessfulProject__title-span">
                Lets work together
              </span>
              <h4 className="aboutSuccessfulProject__title">
                Need a successful project?
              </h4>
              <div className="aboutSuccessfulProject__button-div">
                <button className="aboutSuccessfulProject__btn">
                  Estimate Projects
                  <HiOutlineChevronDoubleRight className="aboutSuccessfulProject__icon" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
