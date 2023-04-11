import React from "react";
import { FaTwitter } from "react-icons/fa";
import { GrFacebookOption } from "react-icons/gr";
import { GrLinkedinOption } from "react-icons/gr";
import { AiFillSkype } from "react-icons/ai";
import rightImg from "../../assets/images/footer-circle.svg";
import LeftImg from "../../assets/images/footer-circle-1.svg";
import logoFooter from "../../assets/images/logoWhite.svg";
import "./Footer.scss";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__bg">
        <div className="footer__img-left-div">
          <img src={LeftImg} alt="" />
        </div>
        <div className="container">
          <div className="footer__main">
            <div className="footer__main-div">
              <div className="footer__logo-div">
                <div className="footer__logo-img">
                  <Link to="/">
                    <img src={logoFooter} alt="" />
                  </Link>
                </div>
                <p className="footer__text">
                  Tempus nula rhoncus euismod curae masa <br /> cras justo,
                  quisque semper molestie <br /> primis porttitor mus tempor
                  dapibus
                </p>
                <div className="footer__inner-icons-div">
                  <span className="footer__inner-span-hover">
                    <GrFacebookOption className="footer__inner-facebook" />
                  </span>
                  <span className="footer__inner-span-hover">
                    <FaTwitter className="footer__inner-twitter" />
                  </span>
                  <span className="footer__inner-span-hover">
                    <GrLinkedinOption className="footer__inner-linkedin" />
                  </span>
                  <span className="footer__inner-span-hover">
                    <AiFillSkype className="footer__inner-skype" />
                  </span>
                </div>
              </div>
              <ul className="footer__list">
                <p className="footer__item-text">Services</p>
                <li className="footer__item">
                  <Link className="footer__link-item" to="/services">
                    Branding Design
                  </Link>
                </li>
                <li className="footer__item">
                  <Link className="footer__link-item" to="/services">
                    Website Development
                  </Link>
                </li>
                <li className="footer__item">
                  <Link className="footer__link-item" to="/services">
                    App Design
                  </Link>
                </li>
                <li className="footer__item">
                  <Link className="footer__link-item" to="/services">
                    Digital Marketing
                  </Link>
                </li>
                <li className="footer__item">
                  <Link className="footer__link-item" to="/services">
                    Product Development
                  </Link>
                </li>
              </ul>
              <ul className="footer__list">
                <p className="footer__item-text">Resourses</p>
                <li className="footer__item">
                  <Link className="footer__link-item" to="/post">
                    Blog
                  </Link>
                </li>
                <li className="footer__item">
                  <Link className="footer__link-item" to="/portfolio">
                    Case Study
                  </Link>
                </li>
                <li className="footer__item">
                  <Link className="footer__link-item" to="/portfolio">
                    Portfolio
                  </Link>
                </li>
                <li className="footer__item">
                  <Link className="footer__link-item" to="/team">
                    Team pages
                  </Link>
                </li>
              </ul>
              <ul className="footer__list">
                <p className="footer__item-text">Support</p>
                <li className="footer__item">
                  <Link className="footer__link-item" to="/contact">
                    Contact
                  </Link>
                </li>
                <li className="footer__item">
                  <Link className="footer__link-item" to="/faq">
                    Privacy Policy
                  </Link>
                </li>
                <li className="footer__item">
                  <Link className="footer__link-item" to="/faq">
                    Terms of Use
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer__bootom-bg">
          <div className="container">
            <div className="footer__botton-div">
              <div className="footer__first-div">
                <p className="footer__botton-text">
                  Privacy & Terms.
                  <span className="footer__botton-text footer__botton-span">
                    Contact Us
                  </span>
                </p>
              </div>
              <div className="footer__first-div">
                <p className="footer__botton-text-center">
                  Copyright @2022 Axela. by ReacThemes
                </p>
              </div>
              <div className="footer__first-div">
                <p className="footer__botton-text">
                  Privacy & Terms.
                  <span className="footer__botton-text footer__botton-span">
                    Contact Us
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__img-right-div">
          <img src={rightImg} alt="" />
        </div>
      </div>
    </div>
  );
}
