import React from 'react';
import Card from '../cards/card';

const CategorySection = () => {
    return (
        <>
            <section className='mb-10 hidden md:block'>

                <div className='w-full border-b-4 border-b-pink-500'>        
                    <div className="relative w-fit bg-pink-500 px-4 py-2">
                        <div className='triangle left-[100%] top-0 border-l-[15px] border-l-pink-500'></div>
                        <p className="text-md text-center text-white">Category</p>
                    </div>
                </div>
        
                {/* Tablet and Desktop Section */}
                <div className='flex space-x-5 bg-white px-10 py-2 lg:py-5 shadow-md'>

                    <div className='group relative w-1/3'>
                        <div className='group'>
                            <div className='bg-black group-hover:shadow-inner'>
                                <img src="/maxresdefault.jpg" alt="" className='transform transition-transform ease-in-out group-hover:scale-95' />
                            </div>
                            <div className='bg-pink-500 p-5'>
                                <h1 className='text-3xl font-medium text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                            </div>
                        </div>
                    </div>

                    <div className='grid w-2/3 grid-cols-4 grid-rows-2 space-x-2'>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                    </div>
                </div>

            </section>

            {/* Mobile Section */}
            <section className='mb-10 block md:hidden'>

                <div className='w-full border-b-4 border-b-black'>        
                    <div className="relative w-fit bg-black px-4 py-2">
                        <div className='triangle left-[100%] top-0'></div>
                        <p className="text-md text-center text-white">Category</p>
                    </div>
                </div>

                <div className='bg-white px-5 py-3 shadow-md'>
                    <div className='flex space-x-3 overflow-x-auto [&_div]:w-52'>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                    </div>
                </div>

            </section>
        </>
    )
}

export default CategorySection