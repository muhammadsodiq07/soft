import React from "react";
import "./PostHero.scss";

export default function PostHero() {
  return (
    <div className="postHero">
      <div className="postHero__main">
        <h2 className="postHero__title">Posts Details</h2>
        <p className="postHero__text">
          Home / <span>Post Details</span>
        </p>
      </div>
    </div>
  );
}
