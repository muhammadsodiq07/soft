import React from "react";
import Error from "../../components/Error/Error";
import ErrorHero from "../../components/Error/ErrorHero/ErrorHero";
import ContactCompany from "../../components/Contact/ContactCompany/ContactCompany";


export default function ErrorMain() {
  return (
    <div className="errorMain">
      <div className="errorMain__home">
        <Error/>
      </div>
      <div className="errorMain__hero">
        <ErrorHero/>
      </div>
      <div className="errorMain__hero">
        <ContactCompany/>
      </div>
    </div>
  );
}
