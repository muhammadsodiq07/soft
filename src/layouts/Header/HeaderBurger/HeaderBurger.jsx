import React from "react";
import Languages from "../Languages/Languages";
import { useTranslation } from "react-i18next";
import { SlEarphonesAlt } from "react-icons/sl";
import "./HeaderBurger.scss";

export default function HeaderBurger({ burgerModal, setBurgerModal }) {
  const { t } = useTranslation();
  return (
    <div className={`${burgerModal ? "headerBurger" : ""}`}>
      <div
        className={`${
          burgerModal ? "headerBurger__openModal" : "headerBurger__closeModal"
        }`}
      >
        <div className="headerBurger__modal-main">
          <div className="headerBurger__buttons-div">
            <button className="header__btn">
              {t("header__call")}{" "}
              <SlEarphonesAlt className="header__btn-icon" fontWeight={700} />
            </button>
            <div className="headerBurger__languages">
              <Languages />
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${
          burgerModal ? "headerBurger__backdrob" : "headerBurger__backdrobClose"
        }`}
        onClick={() => setBurgerModal(false)}
      ></div>
    </div>
  );
}
