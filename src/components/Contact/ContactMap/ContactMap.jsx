import React from "react";
import "./ContactMap.scss";

export default function ContactMap() {
  return (
    <div className="contactMap">
      <div className="contactMap__main">
        <div className="contact__map-div">
          <iframe
            classname="contactMap__map-img"
            title="map"
            width="100%"
            height="580px"
            data-aos="fade-up"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d640.6406409626504!2d69.27455678610504!3d41.29875000435924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8ada61224b9d%3A0x68aa15c702a43d8c!2sEffective%20Study!5e0!3m2!1sru!2s!4v1676463547699!5m2!1sru!2s"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
}
