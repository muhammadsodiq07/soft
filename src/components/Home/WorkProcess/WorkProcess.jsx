import React from "react";
import { useTranslation } from "react-i18next";
import desing from "../../../assets/images/workProcess-Desing.svg";
import "./WorkProcess.scss";

export default function WorkProcess() {
  const { t } = useTranslation();

  return (
    <div className="workProcess">
      <div className="container">
        <div className="workProcess__main">
          <p className="workProcess__subTitle">{t("how_to_work")}</p>
          <h4 className="workProcess__title">{t("work_Process")}</h4>
          <ul className="workProcess__list">
            <li
              className="workProcess__item"
              data-aos="fade-up"
            >
              <div className="workProcess__inner">
                <div className="workProcess__innerImage-div">
                  <img className="workProcess__image" src={desing} alt="" />
                </div>
                <p className="workProcess__inner-title">#1 {t("Design")}</p>
                <p className="workProcess__inner-text">
                  Tempor lacus sodaleset conubia <br /> accumsan ornare life
                </p>
              </div>
            </li>
            <li
              className="workProcess__item"
              data-aos="fade-up"
            >
              <div className="workProcess__inner">
                <div className="workProcess__innerImage-div">
                  <img className="workProcess__image" src={desing} alt="" />
                </div>
                <p className="workProcess__inner-title">#1 {t("Branding")}</p>
                <p className="workProcess__inner-text">
                  Tempor lacus sodaleset conubia <br /> accumsan ornare life
                </p>
              </div>
            </li>
            <li
              className="workProcess__item"
              data-aos="fade-up"
            >
              <div className="workProcess__inner">
                <div className="workProcess__innerImage-div">
                  <img className="workProcess__image" src={desing} alt="" />
                </div>
                <p className="workProcess__inner-title">#1 {t("Marketing")}</p>
                <p className="workProcess__inner-text">
                  Tempor lacus sodaleset conubia <br /> accumsan ornare life
                </p>
              </div>
            </li>
            <li
              className="workProcess__item"
              data-aos="fade-up"
            >
              <div className="workProcess__inner">
                <div className="workProcess__innerImage-div">
                  <img className="workProcess__image" src={desing} alt="" />
                </div>
                <p className="workProcess__inner-title">#1 {t("Solution")}</p>
                <p className="workProcess__inner-text">
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
