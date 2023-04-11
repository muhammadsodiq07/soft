import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "./Hero.scss";

export default function Hero() {
  const { t } = useTranslation();
  return (
    <div className="hero">
      <div className="hero__main">
        <div className="hero__flex-div">
          <div className="hero__info-div">
            <div data-aos="fade-right">
              <h2 className="hero__title">
                {t("hero__title")} <br /> {t("hero__title2")}
              </h2>
              <p className="hero__text">
                Enim luctus sociis cum quam cubilia penatibus sodales neque
                tristique <br /> tempor dignissim aptent sollicitudin mattis
                integer magnis
              </p>
              <div className="hero__buttons-div">
                <Link to="/home/about">
                  <button className="hero__btn-start">{t("hero__btn")}</button>
                </Link>
              </div>
            </div>
          </div>
          <div data-aos="fade-left">
            <div className="hero__img-div">
              <img src="https://imgur.com/mIWV2OU.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
