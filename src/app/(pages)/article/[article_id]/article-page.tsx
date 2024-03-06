import React from "react";
import HotNews from "@/app/components/sideNews/hot-news";
import RecentNews from "@/app/components/sideNews/recent-news";
import { fetchArticlesById } from "@/app/api/article";

const ArticlePage = async ({ article_id }: { article_id: string }) => {
  const article = await fetchArticlesById(article_id);

  return (
    <>
      <div className="flex justify-center md:hidden">
        <img src="/ads.png" alt="" className="my-10 w-1/2 md:w-full" />
      </div>

      <div className="flex flex-wrap space-x-10 md:flex-nowrap">
        <section className="w-full bg-white p-5 shadow-lg md:w-2/3">
          <div>
            <h1 className="text-2xl">{article?.data.attributes.title}</h1>
            <p className="my-5 text-gray-500">time</p>
          </div>

          <hr className="my-5" />

          <div
            className="text-justify"
            dangerouslySetInnerHTML={{
              __html: article.data?.attributes.content,
            }}
          />

          <p className="my-5">author</p>
        </section>

        <section className="flex w-full flex-wrap justify-center md:w-1/3">
          <img src="/ads.png" alt="" className="my-10 w-1/2 md:w-full" />

          <HotNews />

          <img src="/ads.png" alt="" className="my-10 w-1/2 md:w-full" />

          <RecentNews />

          <img src="/ads.png" alt="" className="my-10 w-1/2 md:w-full" />
        </section>
      </div>
    </>
  );
};

export default ArticlePage;
