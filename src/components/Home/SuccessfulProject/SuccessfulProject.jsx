import React from "react";
import { HiOutlineChevronDoubleRight } from "react-icons/hi";
import "./SuccessfulProject.scss";

export default function SuccessfulProject() {
  return (
    <div className="SuccessfulProject">
      <div className="SuccessfulProject__bg">
        <div className="container">
          <div className="SuccessfulProject__main">
            <div className="SuccessfulProject__title-div">
              <span className="SuccessfulProject__title-span">
                Lets work together
              </span>
              <h4 className="SuccessfulProject__title">
                Need a successful project?
              </h4>
              <div className="SuccessfulProject__button-div">
                <a href="#email">
                  <button className="SuccessfulProject__btn">
                    Estimate Projects
                    <HiOutlineChevronDoubleRight className="SuccessfulProject__icon" />
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
