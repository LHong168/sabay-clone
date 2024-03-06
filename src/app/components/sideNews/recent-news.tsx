import { fetchArticlesByRecent } from '@/app/api/article'
import { ArticleType } from '@/app/share/types/article-type'
import Link from 'next/link'
import React from 'react'

const RecentNews = async () => {
    const recentArticle = await fetchArticlesByRecent()

    return (
        <div className="w-full p-3">
            <h1 className="text-xl font-bold">Recent News</h1>

            <hr className=" my-5 w-20 border-[3px] border-red-500" />

            <div>
                {recentArticle.data.map(
                    (article: ArticleType, index: number) => (
                        <Link key={index} href={`/article/${article.id}`}>
                            <div className="flex space-x-3 mb-5">
                                <img
                                    src={
                                        process.env.STRAPI_IMAGE_URL +
                                        article.attributes.thumbnail.data
                                            .attributes.url
                                    }
                                    alt=""
                                    className="h-14 w-14 object-cover"
                                />
                                <h2>{article.attributes.title}</h2>
                            </div>
                        </Link>
                    )
                )}
            </div>
        </div>
    )
}

export default RecentNews
