import React from 'react';
import FeaterCard from '../components/cards/featureCard';
import Card from '../components/cards/card';
import BigCard from '../components/cards/bigCard';

const HomePage = () => {
  return (
    <div className='w-3/5 m-auto'>
      
      <section className='flex justify-between align-middle mb-10 space-x-3'>
        <div className='grid grid-cols-7 grid-rows-2 w-3/4'>
          <div className=' col-span-4'>
            <FeaterCard></FeaterCard>
          </div>
          <div className='col-span-3'>
            <FeaterCard></FeaterCard>
          </div>
          <div className=' col-span-4'>
            <FeaterCard></FeaterCard>
          </div>
          <div className='col-span-3'>
            <FeaterCard></FeaterCard>
          </div>
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

      <section className='mb-10'>

        <div className='border-b-4 border-b-black w-full'>        
          <div className="relative w-fit px-4 py-2 bg-black">
            <div className='top-0 left-[100%] triangle'></div>
            <p className="text-md text-white text-center">Category</p>
          </div>
        </div>

        <div className='bg-white py-5 px-10 flex space-x-5 shadow-md'>
          
            <div className='w-1/3 group relative'>
              <div className='group grid grid-rows-2'>
                  <div className='bg-black group-hover:shadow-inner'>
                    <img src="/maxresdefault.jpg" alt="" className='transition-transform ease-in-out transform group-hover:scale-95' />
                  </div>
                  <div className='bg-pink-500 p-5'>
                    <h1 className='text-white text-3xl font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                  </div>
              </div>
            </div>

            <div className='w-2/3 grid grid-cols-4 space-x-2'>
              <Card></Card>
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