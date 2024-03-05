import React from 'react';
import FeatureCard from '../cards/feature-card';
import { ArticleType } from '@/app/share/types/article-type';

const TopSection: React.FC<{ articles: ArticleType[] | never }>  = ({articles}) => {

    return (
        <section className="mb-10 flex justify-between align-middle md:space-x-3">
            <div className="flex flex-nowrap overflow-x-auto md:grid md:w-3/4 md:grid-cols-7 md:even:[&>div]:col-span-3 md:odd:[&>div]:col-span-4">
                {
                    articles.map((_article: ArticleType, _index:  number) => (
                        <div key={_index} className="w-fit flex-none">
                            <FeatureCard article={_article} />
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
