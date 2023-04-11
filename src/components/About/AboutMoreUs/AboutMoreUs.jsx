import React from "react";
import { useTranslation } from "react-i18next";
import aboutMoreUsImage from "../../../assets/images/moreAboutUs.png";
import "./AboutMoreUs.scss";

export default function AboutMoreUs() {
  const { t } = useTranslation();

  return (
    <div className="aboutMoreUs">
      <div className="container">
        <div className="aboutMoreUs__main">
          <div className="aboutMoreUs__main-div">
            <div data-aos="fade-right">
              <div className="aboutMoreUs__left-div">
                <img className="aboutMoreUs" src={aboutMoreUsImage} alt="" />
              </div>
            </div>
            <div className="aboutMoreUs__right-div" data-aos="fade-left">
              <span className="aboutMoreUs__span">More About Company</span>
              <h4 className="aboutMoreUs__title">
                Makeing Your Business <br /> More Unique
              </h4>
              <p className="aboutMoreUs__text">
                Lorem ipsum dolor sit amet consectetur adipiscing italeo tellus,
                luctus nec mattis pulvinar dapibus leo. dolor sit amet,
                consectetur adipiscing elit. dkalk elit tellus, luctus nec
                mattis.
              </p>
              <p className="aboutMoreUs__text1">
                Natoque turpis metus mollis dignissim sociosqu curabitur
                suspendisse eu habitasse, arcu hendrerit vitae leo laoreet nulla
              </p>
              <button className="aboutMoreUs__btn">{t("hero__btn")}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
