import React from 'react';
import ParentLayout from '@/app/components/layout';
import ArticlePage from './articlePage';

const Article = async () => {

  return (
    <ParentLayout>
        <ArticlePage></ArticlePage>
    </ParentLayout>
  )
}

export default Article;