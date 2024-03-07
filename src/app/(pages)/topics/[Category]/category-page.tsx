import React from 'react'
import CategoryList from '@/app/components/category/category-list'
import CategoryPageTag from '@/app/components/category/category-page-tag'
import { fetchArticlesByCategory } from '@/app/api/article'
import SideNews from '@/app/components/sideNews/side-news'

const CategoryPage = async ({ category }: { category: string }) => {
    const articles = await fetchArticlesByCategory(category.toLowerCase())

    return (
        <>
            <div className="flex justify-center md:hidden">
                <img src="/ads.png" alt="" className="my-10 w-1/2 md:w-full" />
            </div>

            <div className="md:h-auto flex flex-wrap space-x-10 md:flex-nowrap ">
                <section className="relative w-full md:w-2/3">
                    <CategoryPageTag categoryName={category} />

                    <CategoryList articles={articles?.data || []} />
                </section>

                <SideNews />
            </div>
        </>
    )
}

export default CategoryPage
