import React from "react";
import { Link } from "react-router-dom";
import errorImg from "../../../assets/images/error.png";
import "./ErrorHero.scss";

export default function ErrorHero() {
  return (
    <div className="errorHero">
      <div className="container">
        <div className="errorHero__main">
          <div className="errorHero__inner-div">
            <div className="errorHero__img-div">
              <img src={errorImg} alt="" />
            </div>
            <div className="errorHero__text-div">
              <h4 className="errorHero__text">Oops! Nothing Was Found</h4>
              <p className="errorHero__span">
                Sorry, we couldn’t find the page you where looking for. We
                suggest <br /> that you return to homepage.
              </p>
              <Link className="errorHero__link" to="/">
                <button className="errorHero__back">Back To Homepage</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
