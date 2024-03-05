import React from 'react';
import ParentLayout from '@/app/components/layout';
import ArticlePage from './article-page';

const Article = async () => {
    return (
        <ParentLayout>
            <ArticlePage/>
        </ParentLayout>
    )
}

export default Article;