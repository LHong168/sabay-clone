import React from "react";
import { ArticleType } from "@/app/share/types/article-type";

const HorizontalCard: React.FC<{ article: ArticleType }> = ({ article }) => {
  const details = {
    title: article.attributes.title,
    subtitle: article.attributes.subtitle,
    publishedDate: article.attributes.publishedAt.slice(0, 10),
    thumbNail:
      process.env.STRAPI_IMAGE_URL +
      article.attributes.thumbnail.data.attributes.url,
  };

  return (
    <div className="group flex h-48 space-x-3">
      <div className="flex w-1/3 items-center justify-center bg-black">
        <img
          src={details.thumbNail}
          alt=""
          className="h-full transform object-cover transition-transform ease-in-out group-hover:scale-95"
        />
      </div>
      <div className="flex w-2/3 flex-col justify-center">
        <h1 className="mb-2 text-xl font-medium text-black">{details.title}</h1>
        <p className="mb-2 text-gray-500">{details.publishedDate}</p>
        <hr />
        <h2 className="text-gray-800">{details.subtitle}</h2>
      </div>
    </div>
  );
};

export default HorizontalCard;
