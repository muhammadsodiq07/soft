import React, { useEffect, useState } from "react";
import portfolioProjectsDate from "../../portfolioProjectDate";
// import PortfolioHome from "../../components/Portfolio/PortfolioHome";
import PortfolioProjects from "../../components/Portfolio/PortfolioProjects/PortfolioProjects";
import PortfolioPagniton from "../../components/Portfolio/PortfolioProjects/PortfolioPagnition/PortfolioPagniton";
import "./PortfolioMain.scss";
import ContactCompany from "../../components/Contact/ContactCompany/ContactCompany";
import HeroMain from "../../layouts/HeroMain";

export default function PortfolioMain() {
  const [newArr, setNewArr] = useState([]);
  let [currentPage, setCurrentPage] = useState(1);
  let [postsPerPage] = useState(9);

  useEffect(() => {
    setNewArr(portfolioProjectsDate);
  }, []);

  let indexOfLastPage = currentPage * postsPerPage;
  let indexOfFirstPage = indexOfLastPage - postsPerPage;
  let currentPosts = newArr.slice(indexOfFirstPage, indexOfLastPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="portfolioMain">
      <div className="portfolioMain__home">
        {/* <PortfolioHome /> */}
        <HeroMain/>
      </div>
      <div className="portfolioMain__projects">
        <PortfolioProjects
          portfolioProjectsDate={portfolioProjectsDate}
          newArr={currentPosts}
          setNewArr={setNewArr}
        />
        <PortfolioPagniton
          postsPerPage={postsPerPage}
          totalPosts={newArr.length}
          paginate={paginate}
        />
      </div>
      <div className="portfolioMain__customer">
        <ContactCompany />
      </div>
    </div>
  );
}
