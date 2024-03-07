import React from 'react'
import { ArticleType } from '@/app/share/types/article-type'
import CategoryFeatureTag from '../category/category-feature-tag'
import Link from 'next/link'

const FeatureCard: React.FC<{ article: ArticleType }> = ({ article }) => {
    const details = {
        id: article.id,
        title: article.attributes.title,
        subtitle: article.attributes.subtitle,
        category:
            article.attributes.article_category?.data.attributes.name || '',
        publishedDate: article.attributes.publishedAt.slice(0, 10),
        thumbNail: article.attributes.thumbnail?.data?.attributes?.url
            ? process.env.STRAPI_IMAGE_URL +
              article.attributes.thumbnail.data.attributes.url
            : '',
    }

    return (
        <Link href={`/article/${details.id}?category=${details.category}`}>
            <div className="group relative h-fit overflow-hidden bg-black shadow-lg md:h-full">
                <div className="absolute bottom-0 left-0 right-0 top-0 z-10 bg-gradient-to-t from-black to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
                <div className="flex items-center justify-center max-h-[20em]">
                    <img
                        src={details.thumbNail}
                        alt=""
                        className="object-contain opacity-70 h-screen"
                    />
                </div>

                <CategoryFeatureTag categoryName={details.category} />

                <div className="absolute bottom-0 left-0 right-0 z-20 px-3 py-5">
                    <h1 className="text-lg text-white">
                        {details.publishedDate}
                    </h1>
                </div>
                <div className="absolute bottom-5 left-0 right-0 z-20 px-3 duration-300 group-hover:-translate-y-10 md:-translate-y-0">
                    <h2 className="sm:text-lg font-semibold text-white group-hover:text-red-500 line-clamp-2 xl:text-xl">
                        {details.title}
                    </h2>
                    <p className="sm:text-sm text-gray-300 opacity-0 transition-all duration-300 group-hover:opacity-100 line-clamp-2 xl:text-lg">
                        {details.subtitle}
                    </p>
                </div>
            </div>
        </Link>
    )
}

export default FeatureCard
