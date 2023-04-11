import React from "react";
import "./PostCardsPagniton.scss";

export default function PostCardsPagniton({
  postsPerPage,
  totalPosts,
  paginate,
}) {
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumber.push(i);
  }

  return (
    <div className="postCardsPagniton">
      <nav className="container">
        <ul className="postCardsPagniton__list">
          {pageNumber.map((number) => {
            return (
              <li className="postCardsPagniton__item" key={number}>
                <button
                  onClick={() => paginate(number)}
                  className="postCardsPagniton__btn"
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
