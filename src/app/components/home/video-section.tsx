import React from 'react';
import Card from '../cards/card';
import BigCard from '../cards/big-card';

const VideoSection = () => {
    return (
        <>
            {/* Tablet and Desktop Section */}
            <section className='mb-10 hidden md:block'>

                <div className='w-full border-b-4 border-b-red-500'>        
                    <div className="relative w-fit bg-red-500 px-4 py-2">
                        <div className='absolute left-[100%] top-0 border-l-[15px] border-t-[40px] border-b-transparent border-l-red-500 border-t-transparent'></div>
                        <p className="text-md text-center text-white">Video</p>
                    </div>
                </div>

                <div className='bg-white px-10 py-5 shadow-md'>

                    <div className='mb-5 grid grid-cols-3 space-x-1'>
                        <BigCard/>
                        <BigCard/>
                        <BigCard/>
                    </div>

                    <div className='grid grid-cols-4 space-x-3'>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                    </div>

                </div>

            </section>

            {/* Mobile Section */}
            <section className='mb-10 block md:hidden'>

                <div className='w-full border-b-4 border-b-red-500'>        
                    <div className="relative w-fit bg-red-500 px-4 py-2">
                        <div className=' absolute left-[100%] top-0 border-l-[15px] border-t-[40px] border-b-transparent border-l-red-500 border-t-transparent'></div>
                        <p className="text-md text-center text-white">Video</p>
                    </div>
                </div>

                <div className='bg-white px-5 py-3 shadow-md'>

                    <div className='flex space-x-3 overflow-x-auto [&_div]:w-52'>
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

export default VideoSection