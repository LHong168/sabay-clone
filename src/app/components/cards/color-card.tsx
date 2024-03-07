import { ArticleType } from '@/app/share/types/article-type'
import Link from 'next/link'
import React from 'react'

const ColorCard = ({ article }: { article: ArticleType }) => {
    const details = {
        id: article.id,
        title: article.attributes.title,
        thumbNail: article.attributes.thumbnail?.data?.attributes?.url
            ? process.env.STRAPI_IMAGE_URL +
              article.attributes.thumbnail.data.attributes.url
            : '',
    }

    return (
        <div className="group relative col-span-2">
            <Link href={`/article/${details.id}`}>
                <div className="bg-black group-hover:shadow-inner flex justify-center">
                    <img
                        src={details.thumbNail}
                        alt=""
                        className="max-h-60 min-h-60 transform transition-transform ease-in-out group-hover:scale-95"
                    />
                </div>
                <div className="bg-pink-500 p-5">
                    <h1 className="text-3xl font-medium text-white">
                        {details.title}
                    </h1>
                </div>
            </Link>
        </div>
    )
}

export default ColorCard
