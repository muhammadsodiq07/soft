import React from "react";
import "./PortfolioPagniton.scss";

function PortfolioPagniton({ postsPerPage, totalPosts, paginate }) {
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumber.push(i);
  }

  return (
    <div className="portfolioPagination">
      <nav className="container">
        <ul className="portfolioPagination__list">
          {pageNumber.map((number) => {
            return (
              <li className="portfolioPagination__item" key={number}>
                <button
                  onClick={() => paginate(number)}
                  className="portfolioPagination__btn"
                >
                  {number}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

export default PortfolioPagniton;
