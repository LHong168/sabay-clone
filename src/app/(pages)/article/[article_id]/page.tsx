import React from "react";
import ParentLayout from "@/app/components/layout";
import ArticlePage from "./article-page";

const Article = ({ params }: { params: { article_id: string } }) => {
  return (
    <ParentLayout>
      <ArticlePage article_id={params.article_id} />
    </ParentLayout>
  );
};

export default Article;
