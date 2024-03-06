import React from 'react'
import HotNews from '@/app/components/sideNews/hot-news'
import RecentNews from '@/app/components/sideNews/recent-news'
import { embedUrl } from '@/app/utils/embed'
import { ArticleType } from '@/app/share/types/article-type'

const ArticlePage = async ({ articles }: { articles: ArticleType }) => {
    const details = {
        title: articles?.attributes.title,
        author: articles?.attributes.author,
        time: articles?.attributes.publishedAt.slice(0, 10),
        content: embedUrl(articles?.attributes.content),
    }

    return (
        <>
            <div className="flex justify-center md:hidden">
                <img src="/ads.png" alt="" className="my-10 w-1/2 md:w-full" />
            </div>

            <div className="flex flex-wrap space-x-10 md:flex-nowrap">
                <section className="w-full bg-white p-5 shadow-lg md:w-2/3">
                    <div>
                        <h1 className="text-2xl">{details.title}</h1>
                        <p className="my-5 text-gray-500">{details.time}</p>
                    </div>

                    <hr className="my-5" />

                    <div
                        className="text-justify [&_img]:my-5"
                        dangerouslySetInnerHTML={{
                            __html: details.content,
                        }}
                    />

                    <p className="my-5">Author: {details.author}</p>
                </section>

                <section className="flex w-full flex-wrap justify-center md:w-1/3">
                    <img
                        src="/ads.png"
                        alt=""
                        className="my-10 w-1/2 md:w-full"
                    />

                    <HotNews />

                    <img
                        src="/ads.png"
                        alt=""
                        className="my-10 w-1/2 md:w-full"
                    />

                    <RecentNews />

                    <img
                        src="/ads.png"
                        alt=""
                        className="my-10 w-1/2 md:w-full"
                    />
                </section>
            </div>
        </>
    )
}

export default ArticlePage
