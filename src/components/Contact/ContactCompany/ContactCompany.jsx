import React from "react";
import ourServicesImg from "../../../assets/images/ourServicesImg/ourServices-icons.svg";
import "./ContactCompany.scss";

export default function ContactCompany() {
  return (
    <div className="contactCompany">
      <div className="contactCompany__bg">
        <div className="container">
          <div className="contactCompany__main">
            <div className="contactCompany__img-div">
              <img src={ourServicesImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
