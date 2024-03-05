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
            
            <div className='md:hidden flex justify-center'>
                <img src="/ads.png" alt="" className='my-10 w-1/2 md:w-full' />
            </div>

            <div className='flex flex-wrap md:flex-nowrap space-x-10'>
                <section className='w-full md:w-2/3'>
                    <div className='border-b-4 border-b-black w-full'>        
                        <div className="relative w-fit px-4 py-2 bg-black">
                            <div className='top-0 left-[100%] border-l-[15px] border-l-black triangle'></div>
                            <p className="text-md text-white text-center">Category</p>
                        </div>
                    </div>

                    <CategoryList></CategoryList>
                </section>

                <section className='w-full md:w-1/3 mt-5 flex flex-wrap justify-center'>

                    <img src="/ads.png" alt="" className='mb-10 w-1/2 md:w-full' />

                    <HotNews></HotNews>

                    <img src="/ads.png" alt="" className='my-10 w-1/2 md:w-full' />

                    <RecentNews></RecentNews>

                    <img src="/ads.png" alt="" className='my-10 w-1/2 md:w-full' />

                </section>

            </div>
        </>
    )
}

export default CategoryPage;