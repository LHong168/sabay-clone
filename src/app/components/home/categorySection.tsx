import React from 'react';
import Card from '../cards/card';

const CategorySection = () => {
  return (
    <>
    <section className='mb-10 hidden md:block'>

        <div className='border-b-4 border-b-black w-full'>        
            <div className="relative w-fit px-4 py-2 bg-black">
                <div className='top-0 left-[100%] triangle'></div>
                <p className="text-md text-white text-center">Category</p>
            </div>
        </div>

        <div className='bg-white py-5 px-10 flex space-x-5 shadow-md'>

            <div className='w-1/3 group relative'>
                <div className='group'>
                    <div className='bg-black group-hover:shadow-inner'>
                        <img src="/maxresdefault.jpg" alt="" className='transition-transform ease-in-out transform group-hover:scale-95' />
                    </div>
                    <div className='bg-pink-500 p-5'>
                        <h1 className='text-white text-3xl font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                    </div>
                </div>
            </div>

            <div className='w-2/3 grid grid-cols-4 grid-rows-2 space-x-2'>
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
    <section className='mb-10 block md:hidden'>

        <div className='border-b-4 border-b-black w-full'>        
            <div className="relative w-fit px-4 py-2 bg-black">
                <div className='top-0 left-[100%] triangle'></div>
                <p className="text-md text-white text-center">Category</p>
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

export default CategorySection