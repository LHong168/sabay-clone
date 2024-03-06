import React from "react";
import { ArticleType } from "@/app/share/types/article-type";

const Card: React.FC<{ article: ArticleType }> = ({ article }) => {
  const details = {
    title: article.attributes.title,
    thumbNail:
      process.env.STRAPI_IMAGE_URL +
      article.attributes.thumbnail.data.attributes.url,
  };

  return (
    <div className="group w-full">
      <div className="max-h-[7em] min-h-[7em] bg-black group-hover:shadow-inner flex justify-center">
        <img
          src={details.thumbNail}
          alt=""
          className="object-contain transform transition-transform ease-in-out group-hover:scale-95"
        />
      </div>
      <div className="py-1 h-1/3">
        <h1 className="text-md text-black">{details.title}</h1>
      </div>
    </div>
  );
};

export default Card;
