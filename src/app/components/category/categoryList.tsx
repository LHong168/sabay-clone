import React from 'react';
import BigCard from '../cards/bigCard';
import HorizontalCard from '../cards/horizontalCard';
import Card from '../cards/card';

const CategoryList = () => {
  return (
    <div className='bg-white p-2 md:py-5 md:px-10 space-y-3 shadow-md'>

        <div className='hidden md:block'>
            <div className='w-full flex space-x-5 mb-10'>
                <BigCard></BigCard>
                <BigCard></BigCard>
            </div>

            <div className='space-y-5'>
                <div className='flex space-x-3 h-48 group'>
                    <div className='bg-black w-1/3 flex justify-center items-center'>
                        <img src="/maxresdefault.jpg" alt="" className='transition-transform ease-in-out transform group-hover:scale-95 object-cover h-full' />
                    </div>
                <HorizontalCard></HorizontalCard>
                </div>
            </div>
        </div>

        <div className='md:hidden grid grid-cols-2 space-x-1 [&_div]:mb-2'>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>

        </div>
    </div>
  )
}

export default CategoryList