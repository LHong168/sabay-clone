import React from 'react'
import ArticlePage from './article-page'
import { fetchArticlesById } from '@/app/api/article'
import NotFoundPage from '../../404/page'

const Article = async ({ params }: { params: { article_id: string } }) => {
    const articles = await fetchArticlesById(params.article_id)

    return (
        <>
            {articles.data ? (
                <ArticlePage articles={articles.data} />
            ) : (
                <NotFoundPage></NotFoundPage>
            )}
        </>
    )
}

export default Article
