import React from 'react';
import Card from '../cards/card';
import BigCard from '../cards/big-card';

const VideoSection = () => {
  return (
    <>

    {/* Tablet and Desktop Section */}
    <section className='hidden md:block mb-10'>

        <div className='border-b-4 border-b-red-500 w-full'>        
            <div className="relative w-fit px-4 py-2 bg-red-500">
                <div className='absolute top-0 left-[100%] border-t-[40px] border-t-transparent border-l-[15px] border-l-red-500 border-b-transparent'></div>
                <p className="text-md text-white text-center">Video</p>
            </div>
        </div>

        <div className='bg-white py-5 px-10 shadow-md'>

            <div className='grid grid-cols-3 space-x-1 mb-5'>
                <BigCard></BigCard>
                <BigCard></BigCard>
                <BigCard></BigCard>
            </div>

            <div className='grid grid-cols-4 space-x-3'>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
            </div>

        </div>

    </section>

    {/* Mobile Section */}
    <section className='block md:hidden mb-10'>

        <div className='border-b-4 border-b-red-500 w-full'>        
        <div className="relative w-fit px-4 py-2 bg-red-500">
            <div className=' absolute top-0 left-[100%] border-t-[40px] border-t-transparent border-l-[15px] border-l-red-500 border-b-transparent'></div>
            <p className="text-md text-white text-center">Video</p>
        </div>
        </div>

        <div className='bg-white py-3 px-5 shadow-md'>

            <div className='flex overflow-x-auto space-x-2'>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
            </div>

        </div>

    </section>
    </>
  )
}

export default VideoSection