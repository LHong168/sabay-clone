import React from 'react';

const FeatureCard = () => {
  return (
    <div className="relative h-full bg-black overflow-hidden shadow-lg group">
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
        <div className='h-full flex justify-center items-center'>
          <img src="maxresdefault.jpg" alt="" className="opacity-70 object-cover h-full" />
        </div>
        <div className="absolute top-5 left-0 px-4 py-2 bg-black">
            <p className="text-md text-white text-center">Category</p>
            <div className='border-l-[15px] border-l-black triangle top-0 left-full'></div>
        </div>
        <div className=' absolute bottom-0 left-0 right-0 py-5 px-3 z-20'>
            <h1 className="text-lg text-white">Date</h1>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-1 px-3 py-2 -translate-y-5 md:-translate-y-0 group-hover:-translate-y-10 z-20 transition duration-300">
            <h2 className="xl:text-xl text-xl font-semibold text-white group-hover:text-red-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, expedita quasi neque</h2>
            <p className="xl:text-lg text-lg text-gray-300 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima consectetur</p>
        </div>
    </div>
  )
}

export default FeatureCard