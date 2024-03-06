import { ArticleType } from '@/app/share/types/article-type'
import Link from 'next/link'
import React from 'react'

const ColorCard: React.FC<{ article: ArticleType }> = ({ article }) => {
    return (
        <div className="group relative col-span-2">
            <Link href={`/article/${article.id}`}>
                <div className="bg-black group-hover:shadow-inner">
                    <img
                        src={
                            process.env.STRAPI_IMAGE_URL +
                            article.attributes.thumbnail.data.attributes.url
                        }
                        alt=""
                        className="transform transition-transform ease-in-out group-hover:scale-95"
                    />
                </div>
                <div className="bg-pink-500 p-5">
                    <h1 className="text-3xl font-medium text-white">
                        {article.attributes.title}
                    </h1>
                </div>
            </Link>
        </div>
    )
}

export default ColorCard
