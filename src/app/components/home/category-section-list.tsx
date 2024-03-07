import React from 'react'
import Card from '../cards/card'
import { ArticleType } from '@/app/share/types/article-type'
import { fetchArticlesByCategory } from '@/app/api/article'
import ColorCard from '../cards/color-card'
import CategoryPageTag from '../category/category-page-tag'

const CategorySectionList = async ({
    categoryName,
}: {
    categoryName: string
}) => {
    const articles = await fetchArticlesByCategory(categoryName)

    return (
        <>
            <section className="mb-10 hidden md:block">
                <CategoryPageTag categoryName={categoryName} />

                {/* Tablet and Desktop Section */}
                <div className="grid grid-cols-5 gap-x-5 bg-white px-10 py-2 lg:py-5 shadow-md">
                    <ColorCard
                        article={articles?.data[0]}
                        categoryName={categoryName}
                    ></ColorCard>

                    <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-rows-2 col-span-3 gap-x-2">
                        {articles.data
                            .slice(1)
                            .map((article: ArticleType, index: number) => (
                                <div key={index} className="w-fit flex-none">
                                    <Card article={article} />
                                </div>
                            ))}
                    </div>
                </div>
            </section>

            {/* Mobile Section */}
            <section className="mb-10 block md:hidden">
                <CategoryPageTag categoryName={categoryName} />

                <div className="bg-white px-5 py-3 shadow-md">
                    <div className="flex space-x-3 overflow-x-auto [&_div]:w-52">
                        {articles.data.map(
                            (article: ArticleType, index: number) => (
                                <div key={index} className="w-fit flex-none">
                                    <Card article={article} />
                                </div>
                            )
                        )}
                    </div>
                </div>
            </section>
        </>
    )
}

export default CategorySectionList
