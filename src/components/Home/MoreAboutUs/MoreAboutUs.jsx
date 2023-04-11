import React from "react";
import "./MoreAboutUs.scss";
import { useTranslation } from "react-i18next";
import MoreAboutUsImage from "../../../assets/images/moreAboutUs.png";
import { Link } from "react-router-dom";

export default function MoreAboutUs() {
  const { t } = useTranslation();
  return (
    <div className="moreAboutUs">
      <div className="container">
        <div className="moreAboutUs__main">
          <div className="moreAboutUs__main-div">
            <div data-aos="fade-right">
              <div className="moreAboutUs__left-div">
                <img className="moreAboutUs" src={MoreAboutUsImage} alt="" />
              </div>
            </div>
            <div className="moreAboutUs__right-div" data-aos="fade-left">
              <span className="moreAboutUs__span">
                {t("more_about_company")}
              </span>
              <h4 className="moreAboutUs__title">
                {t("makeing_your_business")} <br /> {t("more_unique")}
              </h4>
              <p className="moreAboutUs__text">
                Lorem ipsum dolor sit amet consectetur adipiscing italeo tellus,
                luctus nec mattis pulvinar dapibus leo. dolor sit amet,
                consectetur adipiscing elit. dkalk elit tellus, luctus nec
                mattis.
              </p>
              {/* <p className="moreAboutUs__text1">
                Natoque turpis metus mollis dignissim sociosqu curabitur
                suspendisse eu habitasse, arcu hendrerit vitae leo laoreet nulla
              </p> */}
              <Link to="/home/about">
                <button className="moreAboutUs__btn">More About Us</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
