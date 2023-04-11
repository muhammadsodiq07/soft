import React from "react";
import PostHero from "./PostHero/PostHero";
import "./Post.scss";

export default function Post() {
  return (
    <div className="post">
      <div className="post__bg">
        <div className="container">
          <div className="post__main">
            <div className="post__hero">
              <PostHero />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
