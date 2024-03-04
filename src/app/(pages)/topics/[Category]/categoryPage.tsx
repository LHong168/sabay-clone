import React from 'react';
import HotNews from '@/app/components/sideNews/hotNews';
import RecentNews from '@/app/components/sideNews/recentNews';
import CategoryList from '@/app/components/category/categoryList';

interface CategoryPageProps {
    category: string;
}

const CategoryPage = ({category} : CategoryPageProps) => {

    return (
        <div className='w-full md:w-3/5 m-auto'>
            
            <div className='md:hidden block flex justify-center'>
                <img src="/ads.png" alt="" className='my-10 w-1/2 md:w-full' />
            </div>

            <div className='flex flex-wrap md:flex-nowrap space-x-10'>
                <section className='w-full md:w-2/3'>
                    <div className='border-b-4 border-b-black w-full'>        
                        <div className="relative w-fit px-4 py-2 bg-black">
                            <div className='top-0 left-[100%] triangle'></div>
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
        </div>
    )
}

export default CategoryPage;