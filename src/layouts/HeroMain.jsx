import "./HeroMain.scss";
import React from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

export default function HeroMain({ title }) {
  const { t } = useTranslation();
  const location = useLocation();
  return (
    <>
      <section className="heroMain">
        <div className="container">
          <div className="heroMain__inner">
            <div className="heroMain__desc">
              <ul className="heroMain__pathnames-list">
                {location.pathname.split("/").map((item, inx) =>
                  inx + 1 > 1 ? (
                    <li className="heroMain__pathnames-item" data-aos="zoom-in">
                      <p>{t(item)}</p>
                      <span></span>
                    </li>
                  ) : (
                    ""
                  )
                )}
              </ul>

              {title === undefined ? (
                <h2 className="heroMain__title" data-aos="fade-up">
                  {t(location.pathname.split("/").at(-1))}
                </h2>
              ) : (
                <h2 className="heroMain__title" data-aos="fade-up">
                  {title}
                </h2>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
