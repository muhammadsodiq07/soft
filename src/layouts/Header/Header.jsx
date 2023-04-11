/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import Languages from "./Languages/Languages";
import { useTranslation } from "react-i18next";
import logo from "../../assets/images/logo.svg";
import { SlEarphonesAlt } from "react-icons/sl";
import HeaderBurger from "./HeaderBurger/HeaderBurger";
import "./Header.scss";

export default function Header() {
  const { t } = useTranslation();
  const location = useLocation();
  const [navAct, setNavAct] = useState(1);
  const [burgerModal, setBurgerModal] = useState(false);
  const headerArr = [
    {
      id: 1,
      name: t("home"),
      pathName: "/",
      active: true,
    },
    {
      id: 2,
      name: t("about"),
      pathName: "/about",
      active: false,
    },
    {
      id: 3,
      name: t("portfolio"),
      pathName: "/portfolio",
      active: false,
    },
    {
      id: 4,
      name: t("blog"),
      pathName: "/post",
      active: false,
    },
    {
      id: 5,
      name: t("contact"),
      pathName: "/contact",
      active: false,
    },
  ];

  useEffect(() => {
    headerArr.map((item, inx) => {
      if (location.pathname !== "/") {
        if (
          "/" + location.pathname.split("/").at(-1) === item.pathName &&
          "/" + location.pathname.split("/").at(-2) === item.pathName
        ) {
          setNavAct("/" + location.pathname.split("/").at(-1));
        }
        if ("/" + location.pathname.split("/").at(-1) === item.pathName) {
          setNavAct("/" + location.pathname.split("/").at(-1));
        }
        if ("/" + location.pathname.split("/").at(-2) === item.pathName) {
          setNavAct("/" + location.pathname.split("/").at(-2));
        }
      } else {
        setNavAct("/" + location.pathname.split("/").at(-1));
      }
    });
  }, [location.pathname]);

  return (
    <div className="header">
      <div className="header__main container">
        <div className="header__header">
          <div className="header__logo-div">
            <Link to="/" onClick={() => setNavAct(1)}>
              <img src={logo} alt="logo" />
            </Link>
          </div>

          <nav className="header__nav">
            <ul className="header__list">
              {headerArr.map((item, inx) => (
                <li
                  className={`header__item ${
                    item.pathName === navAct ? "navItemAct" : ""
                  }`}
                  onClick={() => setNavAct(item.id)}
                  key={inx + 1}
                >
                  <Link to={item.pathName}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="header__right">
            <button className="header__btn">
              {t("header__call")}{" "}
              <SlEarphonesAlt className="header__btn-icon" fontWeight={700} />
            </button>
            <div className="header__languages">
              <Languages />
            </div>
          </div>
          <button className="header__burger">
            <RxHamburgerMenu
              className="header__burger-icon"
              size={20}
              onClick={() => setBurgerModal(!burgerModal)}
            />
          </button>
        </div>
      </div>
      <HeaderBurger burgerModal={burgerModal} setBurgerModal={setBurgerModal} />
    </div>
  );
}
