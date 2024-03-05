import React from 'react';
import BigCard from '../cards/big-card';
import HorizontalCard from '../cards/horizontal-card';
import Card from '../cards/card';

const CategoryList = () => {
    return (
        <div className='space-y-3 bg-white shadow-md md:p-2 md:px-10 md:py-5'>

            {/* Tablet and Desktop Section */}
            <div className='hidden md:block'>
                <div className='mb-10 flex w-full space-x-5'>
                    <BigCard/>
                    <BigCard/>
                </div>

                <div className='space-y-5'>
                    <div className='group flex h-48 space-x-3'>
                        <div className='flex w-1/3 items-center justify-center bg-black'>
                            <img src="/maxresdefault.jpg" alt="" className='h-full transform object-cover transition-transform ease-in-out group-hover:scale-95' />
                        </div>
                        <HorizontalCard/>
                    </div>
                </div>
            </div>

            {/* Mobile Section */}
            <div className='grid grid-cols-2 gap-2 overflow-clip p-1 md:hidden'>
                <Card />
            </div>
        </div>
    )
}

export default CategoryList