import React from 'react';
import HotNews from '@/app/components/sideNews/hotNews';
import RecentNews from '@/app/components/sideNews/recentNews';
import Card from '@/app/components/cards/card';
import BigCard from '@/app/components/cards/bigCard';

interface CategoryPageProps {
    category: string;
}

const CategoryPage: React.FC<CategoryPageProps> = ({category}) => {

    return (
        <div className='w-3/5 m-auto flex space-x-10'>
            <section className='w-2/3'>
                <div className='border-b-4 border-b-black w-full'>        
                    <div className="relative w-fit px-4 py-2 bg-black">
                        <div className='top-0 left-[100%] triangle'></div>
                        <p className="text-md text-white text-center">Category</p>
                    </div>
                </div>

                <div className='bg-white py-5 px-10 space-y-3 shadow-md'>

                    <div className='w-full flex space-x-5 mb-10'>
                        <BigCard></BigCard>
                        <BigCard></BigCard>
                    </div>

                    <div className='space-y-5'>
                        <div className='flex space-x-3 h-48 group'>
                            <div className='bg-black w-1/3 flex justify-center items-center'>
                                <img src="/maxresdefault.jpg" alt="" className='transition-transform ease-in-out transform group-hover:scale-95 object-cover h-full' />
                            </div>
                            <div className='w-2/3 flex flex-col justify-center'>
                                <h1 className='text-black text-xl mb-2 font-medium'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h1>
                                <p className="text-gray-500 mb-2">Time</p>
                                <hr />
                                <h2 className="text-gray-800">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nemo nostrum cum optio,</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='w-1/3 mt-5'>

                <img src="/ads.png" alt="" className='mb-10' />

                <HotNews></HotNews>

                <img src="/ads.png" alt="" className='my-10' />

                <RecentNews></RecentNews>

                <img src="/ads.png" alt="" className='my-10' />

            </section>

        </div>
    )
}

export default CategoryPage;