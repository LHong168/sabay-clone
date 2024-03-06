import React from 'react'
import Card from '../cards/card'
import BigCard from '../cards/big-card'
import { fetchArticles } from '@/app/api/article'
import { ArticleType } from '@/app/share/types/article-type'
import { checkEmbed } from '@/app/utils/check-embed'

const VideoSection = async () => {
    const articles = await fetchArticles()

    const vidArticle = checkEmbed(articles.data)

    console.log(vidArticle)

    return (
        <>
            {/* Tablet and Desktop Section */}
            <section className="mb-10 hidden md:block">
                <div className="w-full border-b-4 border-b-red-500">
                    <div className="relative w-fit bg-red-500 px-4 py-2">
                        <div className="absolute left-[100%] top-0 border-l-[15px] border-t-[40px] border-b-transparent border-l-red-500 border-t-transparent"></div>
                        <p className="text-md text-center text-white">Video</p>
                    </div>
                </div>

                <div className="bg-white px-10 py-5 shadow-md">
                    <div className="mb-5 grid grid-cols-3 space-x-1">
                        {vidArticle
                            .slice(0, 3)
                            .map((article: ArticleType, index: number) => (
                                <BigCard key={index} article={article} />
                            ))}
                    </div>

                    <div className="grid grid-cols-4 space-x-3">
                        {vidArticle
                            .slice(3)
                            .map((article: ArticleType, index: number) => (
                                <Card key={index} article={article} />
                            ))}
                    </div>
                </div>
            </section>

            {/* Mobile Section */}
            <section className="mb-10 block md:hidden">
                <div className="w-full border-b-4 border-b-red-500">
                    <div className="relative w-fit bg-red-500 px-4 py-2">
                        <div className=" absolute left-[100%] top-0 border-l-[15px] border-t-[40px] border-b-transparent border-l-red-500 border-t-transparent"></div>
                        <p className="text-md text-center text-white">Video</p>
                    </div>
                </div>

                <div className="bg-white px-5 py-3 shadow-md">
                    <div className="flex space-x-3 overflow-x-auto [&_div]:w-52">
                        {vidArticle.map(
                            (article: ArticleType, index: number) => (
                                <Card key={index} article={article} />
                            )
                        )}
                    </div>
                </div>
            </section>
        </>
    )
}

export default VideoSection
