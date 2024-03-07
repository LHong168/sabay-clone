import React from 'react'
import { ArticleType } from '@/app/share/types/article-type'
import Link from 'next/link'

const Card = ({ article }: { article: ArticleType }) => {
    const details = {
        title: article.attributes.title,
        thumbNail: article.attributes.thumbnail?.data?.attributes?.url
            ? process.env.STRAPI_IMAGE_URL +
              article.attributes.thumbnail.data.attributes.url
            : '',
    }

    return (
        <Link href={`/article/${article.id}`}>
            <div className="group w-full">
                <div className="max-h-[7em] min-h-[7em] bg-black group-hover:shadow-inner flex justify-center">
                    <img
                        src={details.thumbNail}
                        alt=""
                        className="object-contain transform transition-transform ease-in-out group-hover:scale-95"
                    />
                </div>
                <div className="py-1 h-1/3">
                    <h1 className="text-md text-black">{details.title}</h1>
                </div>
            </div>
        </Link>
    )
}

export default Card
