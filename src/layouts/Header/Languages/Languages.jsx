/* eslint-disable no-unused-expressions */
import React, { useEffect, useState } from "react";
import langIcon from "../../../assets/images/lang.svg";
import i18n from "../../../lang/i18n";
import "./Languages.scss";

export default function Languages() {
  const [lang, setLang] = useState(
    localStorage.getItem("language") !== null
      ? localStorage.getItem("language")
      : "ru"
  );

  const changedLanguage = (e) => {
    localStorage.setItem("language", e.target.value);
    i18n.changeLanguage(localStorage.getItem("language"));
  };

  useEffect(() => {
    localStorage.getItem("language") !== null
      ? setLang(localStorage.getItem("language"))
      : "";
  }, []);

  return (
    <div className="languages__div">
      <div className="languages__div-img">
        <img src={langIcon} alt="" />
      </div>
      <select className="languages__select" onChange={changedLanguage}>
        {lang === "ru" ? (
          <>
            <option value="ru">Ru</option>
            <option value="eng">Eng</option>
            <option value="uz">Uz</option>
          </>
        ) : lang === "eng" ? (
          <>
            <option value="eng">Eng</option>
            <option value="ru">Ru</option>
            <option value="uz">Uz</option>
          </>
        ) : lang === "uz" ? (
          <>
            <option value="uz">Uz</option>
            <option value="eng">Eng</option>
            <option value="ru">Ru</option>
          </>
        ) : (
          ""
        )}
      </select>
    </div>
  );
}
