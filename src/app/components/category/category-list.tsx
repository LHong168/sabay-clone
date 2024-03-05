import React from 'react';
import BigCard from '../cards/big-card';
import HorizontalCard from '../cards/horizontal-card';
import Card from '../cards/card';

const CategoryList = () => {
  return (
    <div className='bg-white md:p-2 md:py-5 md:px-10 space-y-3 shadow-md'>

        {/* Tablet and Desktop Section */}
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

        {/* Mobile Section */}
        <div className='md:hidden grid grid-cols-2 gap-2 overflow-clip p-1'>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
        </div>
    </div>
  )
}

export default CategoryList