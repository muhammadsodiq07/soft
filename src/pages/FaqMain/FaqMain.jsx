import React from "react";
// import Faq from "../../components/Faq/Faq";
import NewFaq from "../../components/Faq/NewFaq/NewFaq";
import GetFaq from "../../components/Faq/GetFaq/GetFaq";
import ContactCompany from "../../components/Contact/ContactCompany/ContactCompany";
import HeroMain from "../../layouts/HeroMain";

export default function FaqMain() {
  return (
    <div>
      {/* <Faq /> */}
      <HeroMain/>
      <GetFaq />
      <NewFaq />
      <ContactCompany />
    </div>
  );
}
