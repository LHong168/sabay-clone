import React from 'react'
import { ArticleType } from '@/app/share/types/article-type'
import BigCard from '../cards/big-card'
import HorizontalCard from '../cards/horizontal-card'
import Card from '../cards/card'

const CategoryList = ({ articles }: { articles: ArticleType[] }) => {
    return (
        <div className="space-y-3 bg-white shadow-md md:p-2 md:px-10 md:py-5">
            {/* Tablet and Desktop Section */}
            <div className="hidden md:block">
                <div className="mb-10 flex w-full space-x-5 overflow-hidden">
                    {articles
                        .slice(0, 2)
                        .map((article: ArticleType, index: number) => (
                            <BigCard key={index} article={article} />
                        ))}
                </div>

                <div className="[&_div]:mb-2">
                    {articles
                        .slice(2)
                        .map((article: ArticleType, index: number) => (
                            <HorizontalCard key={index} article={article} />
                        ))}
                </div>
            </div>

            {/* Mobile Section */}
            <div className="grid grid-cols-2 gap-2 overflow-clip p-1 md:hidden">
                {articles.map((article: ArticleType, index: number) => (
                    <div key={index} className="w-fit flex-none">
                        <Card article={article} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CategoryList
