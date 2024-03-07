import { ArticleType } from '@/app/share/types/article-type'
import Link from 'next/link'
import React from 'react'

const categoryColors = {
    entertainment: {
        bg: 'bg-pink-500',
        corner: 'border-l-pink-500',
    },
    technology: {
        bg: 'bg-blue-500',
        corner: 'border-l-blue-500',
    },
}

const ColorCard = ({
    article,
    categoryName,
}: {
    article: ArticleType
    categoryName: string
}) => {
    const details = {
        id: article.id,
        title: article.attributes.title,
        thumbNail: article.attributes.thumbnail?.data?.attributes?.url
            ? process.env.STRAPI_IMAGE_URL +
              article.attributes.thumbnail.data.attributes.url
            : '',
    }

    const tagClass = categoryColors[categoryName as keyof typeof categoryColors]

    console.log(tagClass)

    return (
        <div className="group relative col-span-2">
            <Link href={`/article/${details.id}?category=${categoryName}`}>
                <div className="bg-black group-hover:shadow-inner flex justify-center">
                    <img
                        src={details.thumbNail}
                        alt=""
                        className="max-h-60 min-h-60 transform transition-transform ease-in-out group-hover:scale-95"
                    />
                </div>
                <div className={`${tagClass.bg} p-5`}>
                    <h1 className="text-3xl font-medium text-white">
                        {details.title}
                    </h1>
                </div>
            </Link>
        </div>
    )
}

export default ColorCard
