import React from 'react'
import HotNews from '@/app/components/sideNews/hot-news'
import RecentNews from '@/app/components/sideNews/recent-news'
import CategoryList from '@/app/components/category/category-list'
import CategoryPageTag from '@/app/components/category/category-page-tag'
import { fetchArticlesByCategory } from '@/app/api/article'

const CategoryPage = async ({ category }: { category: string }) => {
    const articles = await fetchArticlesByCategory(category.toLowerCase())

    return (
        <>
            <div className="flex justify-center md:hidden">
                <img src="/ads.png" alt="" className="my-10 w-1/2 md:w-full" />
            </div>

            <div className="flex flex-wrap space-x-10 md:flex-nowrap ">
                <section className="relative w-full md:w-2/3">
                    <CategoryPageTag categoryName={category} />

                    <CategoryList articles={articles?.data || []} />
                </section>

                <section className="mt-5 flex w-full flex-wrap justify-center md:w-1/3">
                    <img
                        src="/ads.png"
                        alt=""
                        className="mb-10 w-1/2 md:w-full"
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

export default CategoryPage
