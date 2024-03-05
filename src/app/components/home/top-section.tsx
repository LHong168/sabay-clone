import React from 'react';
import FeatureCard from '../cards/feature-card';

interface Article {
    id: number;
    attributes: {
        title: string;
        subtitle: string;
        author: string;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
        locale: string;
        content: string;
        viewCount: string;
        article_category: ArticleCategory;
    };
}

interface ArticleCategory {
    data: {
        id: number;
        attributes: {
        name: string;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
        };
    };
}

const TopSection: React.FC<{ articles: Article | any }>  = ({articles}) => {

    return (
        <section className="mb-10 flex justify-between align-middle md:space-x-3">
            <div className="flex flex-nowrap overflow-x-auto md:grid md:w-3/4 md:grid-cols-7 md:even:[&>div]:col-span-3 md:odd:[&>div]:col-span-4">
                {
                    articles.map((_article: Article, _index:  number) => (
                            <div key={_index} className="w-fit flex-none">
                                <FeatureCard />
                            </div>
                    ))
                }
            </div>


            <div className="hidden w-1/3 space-y-3 md:block">
                <img src="ads.png" alt="" />
                <img src="ads.png" alt="" />
            </div>
        </section>
    );
};

export default TopSection;
