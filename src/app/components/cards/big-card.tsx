import React from 'react'
import { ArticleType } from '@/app/share/types/article-type'
import Link from 'next/link'

const BigCard = ({ article }: { article: ArticleType }) => {
    const details = {
        title: article.attributes.title,
        thumbNail:
            process.env.STRAPI_IMAGE_URL +
            article.attributes.thumbnail.data.attributes.url,
    }

    return (
        <Link href={`/article/${article.id}`}>
            <div className="group">
                <div className="w-full bg-black flex justify-center group-hover:shadow-[inset_0_-2px_4px_rgba(5,5,5,5)]">
                    <img
                        src={details.thumbNail}
                        alt=""
                        className="h-60 object-contain transform transition-transform ease-in-out group-hover:scale-95"
                    />
                </div>
                <div className="py-1">
                    <h1 className="text-lg font-medium text-black">
                        {details.title}
                    </h1>
                </div>
            </div>
        </Link>
    )
}

export default BigCard
