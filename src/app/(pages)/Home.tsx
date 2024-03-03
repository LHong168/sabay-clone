import React from 'react';
import FeaterCard from '../components/cards/featureCard';
import Card from '../components/cards/card';

const HomePage = () => {
  return (
    <div className='w-3/5 m-auto'>
      
      <section className='flex justify-between align-middle mb-10 space-x-3'>
        <div className='grid grid-cols-2 w-3/4 bg-gray-300'>
          <FeaterCard></FeaterCard>
          <FeaterCard></FeaterCard>
          <FeaterCard></FeaterCard>
          <FeaterCard></FeaterCard>
        </div>
        <div className='w-1/3 space-y-3'>
          <img src="ads.png" alt="" />
          <img src="ads.png" alt="" />
        </div>
      </section>

      <section className='mb-10'>

        <div className='border-b-4 border-b-red-500 w-full'>        
          <div className="relative w-fit px-4 py-2 bg-red-500">
            <div className=' absolute top-0 left-[100%] border-t-[40px] border-t-transparent border-l-[15px] border-l-red-500 border-b-transparent'></div>
            <p className="text-md text-white text-center">Video</p>
          </div>
        </div>

        <div className='bg-white py-5 px-10 shadow-md'>

          <div className='flex space-x-1'>
            <Card></Card>
            <Card></Card>
            <Card></Card>
          </div>

          <div className='grid grid-cols-4 space-x-3'>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
          </div>

        </div>

      </section>

      <section className='mb-10'>

        <div className='border-b-4 border-b-black w-full'>        
          <div className="relative w-fit px-4 py-2 bg-black">
            <div className='top-0 left-[100%] triangle'></div>
            <p className="text-md text-white text-center">Category</p>
          </div>
        </div>

        <div className='bg-white py-5 px-10 flex space-x-5 shadow-md'>
          
            <div className='w-1/3 group relative'>
              <div className='bg-black '>
                <img src="maxresdefault.jpg" alt="" className='transition-transform ease-in-out transform group-hover:scale-95' />
              </div>
              <div className='bg-pink-500 p-5'>
                <h1 className='text-white text-3xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
              </div>
            </div>

            <div className='w-2/3 grid grid-cols-4 space-x-2'>
              <Card></Card>
              <Card></Card>
              <Card></Card>
              <Card></Card>
            </div>
        </div>
        
      </section>
    </div>
  )
}

export default HomePage