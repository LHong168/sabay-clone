import React from "react";
import TopSection from "../components/home/top-section";
import VideoSection from "../components/home/video-section";
import CategorySection from "../components/home/category-section";
import { fetchArticles } from "../api/article";

const HomePage = async () => {
  const articles = await fetchArticles();

  return (
    <>
      <TopSection articles={articles?.data} />

      {/* <VideoSection /> */}

      <CategorySection articles={articles?.data} />
    </>
  );
};

export default HomePage;
