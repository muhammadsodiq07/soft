import React from "react";
import { useTranslation } from "react-i18next";
import desing from "../../../assets/images/workProcess-Desing.svg";
import "./AboutWorkProcess.scss";

import "aos/dist/aos.css";



export default function AboutWorkProcess() {
  const { t } = useTranslation();
  return (
    <div className="aboutWorkProcess">
      <div className="container">
        <div className="aboutWorkProcess__main">
          <p className="aboutWorkProcess__subTitle">{t("how_to_work")}</p>
          <h4 className="aboutWorkProcess__title">{t("work_Process")}</h4>
          <ul className="aboutWorkProcess__list">
            <li className="aboutWorkProcess__item" data-aos="fade-up">
              <div className="aboutWorkProcess__inner">
                <div className="aboutWorkProcess__innerImage-div">
                  <img
                    className="aboutWorkProcess__image"
                    src={desing}
                    alt=""
                  />
                </div>
                <p className="aboutWorkProcess__inner-title">
                  #1 {t("Design")}
                </p>
                <p className="aboutWorkProcess__inner-text">
                  Tempor lacus sodaleset conubia <br /> accumsan ornare life
                </p>
              </div>
            </li>
            <li className="aboutWorkProcess__item" data-aos="fade-up">
              <div className="aboutWorkProcess__inner">
                <div className="aboutWorkProcess__innerImage-div">
                  <img
                    className="aboutWorkProcess__image"
                    src={desing}
                    alt=""
                  />
                </div>
                <p className="aboutWorkProcess__inner-title">
                  #1 {t("Branding")}
                </p>
                <p className="aboutWorkProcess__inner-text">
                  Tempor lacus sodaleset conubia <br /> accumsan ornare life
                </p>
              </div>
            </li>
            <li className="aboutWorkProcess__item" data-aos="fade-up">
              <div className="aboutWorkProcess__inner">
                <div className="aboutWorkProcess__innerImage-div">
                  <img
                    className="aboutWorkProcess__image"
                    src={desing}
                    alt=""
                  />
                </div>
                <p className="aboutWorkProcess__inner-title">
                  #1 {t("Marketing")}
                </p>
                <p className="aboutWorkProcess__inner-text">
                  Tempor lacus sodaleset conubia <br /> accumsan ornare life
                </p>
              </div>
            </li>
            <li className="aboutWorkProcess__item" data-aos="fade-up">
              <div className="aboutWorkProcess__inner">
                <div className="aboutWorkProcess__innerImage-div">
                  <img
                    className="aboutWorkProcess__image"
                    src={desing}
                    alt=""
                  />
                </div>
                <p className="aboutWorkProcess__inner-title">
                  #1 {t("Solution")}
                </p>
                <p className="aboutWorkProcess__inner-text">
                  Tempor lacus sodaleset conubia <br /> accumsan ornare life
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
