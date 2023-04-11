import React, { useEffect, useState } from "react";
// import Post from "../../components/Post/Post";
import PostCards from "../../components/Post/PostCards/PostCards";
import PostCardsPagniton from "../../components/Post/PostCards/PostCardsPagniton/PostCardsPagniton";
import HeroMain from "../../layouts/HeroMain";
import postDate from "../../postDate";
import "./PostMain.scss";

export default function PostMain() {
  const [newArr, setNewArr] = useState([]);
  let [currentPage, setCurrentPage] = useState(1);
  let [postsPerPage] = useState(5);

  useEffect(() => {
    setNewArr(postDate);
  }, []);

  let indexOfLastPage = currentPage * postsPerPage;
  let indexOfFirstPage = indexOfLastPage - postsPerPage;
  let currentPosts = newArr.slice(indexOfFirstPage, indexOfLastPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="postMain">
      <div>
        {/* <Post /> */}
        <HeroMain/>
      </div>
      <div className="postMain__postCards">
        <PostCards
          postDate={postDate}
          newArr={currentPosts}
          setNewArr={setNewArr}
        />
        <PostCardsPagniton
          postsPerPage={postsPerPage}
          totalPosts={newArr.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
}
