import React from 'react'
import { ArticleType } from '@/app/share/types/article-type'
import Link from 'next/link'
import Image from 'next/image'

const BigCard = ({ article }: { article: ArticleType }) => {
    const details = {
        id: article.id,
        title: article.attributes.title,
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
            <div className="group">
                <div className="w-full bg-black flex justify-center group-hover:shadow-[inset_0_-2px_4px_rgba(5,5,5,5)]">
                    <Image
                        width={400}
                        height={250}
                        src={details.thumbNail}
                        alt=""
                        className="min-h-60 max-h-60 object-contain transform transition-transform ease-in-out group-hover:scale-95"
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
