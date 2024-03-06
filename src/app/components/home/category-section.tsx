import React from "react";
import Card from "../cards/card";
import { ArticleType } from "@/app/share/types/article-type";

const CategorySection: React.FC<{ articles: ArticleType[] | never }> = ({
  articles,
}) => {
  const featureArticle = articles[0];

  return (
    <>
      <section className="mb-10 hidden md:block">
        <div className="w-full border-b-4 border-b-pink-500">
          <div className="relative w-fit bg-pink-500 px-4 py-2">
            <div className="triangle left-[100%] top-0 border-l-[15px] border-l-pink-500"></div>
            <p className="text-md text-center text-white">Category</p>
          </div>
        </div>

        {/* Tablet and Desktop Section */}
        <div className="grid grid-cols-5 gap-x-5 bg-white px-10 py-2 lg:py-5 shadow-md">
          <div className="group relative col-span-2">
            <div className="group">
              <div className="bg-black group-hover:shadow-inner">
                <img
                  src={
                    process.env.STRAPI_IMAGE_URL +
                    featureArticle.attributes.thumbnail.data.attributes.url
                  }
                  alt=""
                  className="transform transition-transform ease-in-out group-hover:scale-95"
                />
              </div>
              <div className="bg-pink-500 p-5">
                <h1 className="text-3xl font-medium text-white">
                  {featureArticle.attributes.title}
                </h1>
              </div>
            </div>
          </div>

          <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-rows-2 col-span-3 gap-x-2">
            {articles.slice(1).map((article: ArticleType, index: number) => (
              <div key={index} className="w-fit flex-none">
                <Card article={article} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile Section */}
      <section className="mb-10 block md:hidden">
        <div className="w-full border-b-4 border-b-black">
          <div className="relative w-fit bg-black px-4 py-2">
            <div className="triangle left-[100%] top-0"></div>
            <p className="text-md text-center text-white">Category</p>
          </div>
        </div>

        <div className="bg-white px-5 py-3 shadow-md">
          <div className="flex space-x-3 overflow-x-auto [&_div]:w-52">
            {articles.map((article: ArticleType, index: number) => (
              <div key={index} className="w-fit flex-none">
                <Card article={article} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CategorySection;
