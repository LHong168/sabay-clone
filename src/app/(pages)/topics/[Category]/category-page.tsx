import React from 'react';
import HotNews from '@/app/components/sideNews/hot-news';
import RecentNews from '@/app/components/sideNews/recent-news';
import CategoryList from '@/app/components/category/category-list';

interface CategoryPageProps {
    category: string;
}

const CategoryPage = ({category} : CategoryPageProps) => {

    return (
        <>
            <div className='flex justify-center md:hidden'>
                <img src="/ads.png" alt="" className='my-10 w-1/2 md:w-full' />
            </div>

            <div className='flex flex-wrap space-x-10 md:flex-nowrap '>
                <section className='w-full md:w-2/3'>
                    <div className='w-full border-b-4 border-b-black'>        
                        <div className="relative w-fit bg-black px-4 py-2">
                            <div className='triangle left-[100%] top-0 border-l-[15px] border-l-black'></div>
                            <p className="text-md text-center text-white">Category</p>
                        </div>
                    </div>

                    <CategoryList/>
                </section>

                <section className='mt-5 flex w-full flex-wrap justify-center md:w-1/3'>

                    <img src="/ads.png" alt="" className='mb-10 w-1/2 md:w-full' />

                    <HotNews/>

                    <img src="/ads.png" alt="" className='my-10 w-1/2 md:w-full' />

                    <RecentNews/>

                    <img src="/ads.png" alt="" className='my-10 w-1/2 md:w-full' />

                </section>

            </div>
        </>
    )
}

export default CategoryPage;