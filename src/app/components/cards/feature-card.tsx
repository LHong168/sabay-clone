import React from 'react';

const FeatureCard = () => {
    return (
        <div className="group relative h-full overflow-hidden bg-black shadow-lg">
            <div className="absolute bottom-0 left-0 right-0 top-0 z-10 bg-gradient-to-t from-black to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
            <div className='flex h-full items-center justify-center'>
                <img src="maxresdefault.jpg" alt="" className="h-full object-cover opacity-70" />
            </div>
            <div className="absolute left-0 top-5 bg-black px-4 py-2">
                <p className="text-md text-center text-white">Category</p>
                <div className='triangle left-full top-0 border-l-[15px] border-l-black'></div>
            </div>
            <div className=' absolute bottom-0 left-0 right-0 z-20 px-3 py-5'>
                <h1 className="text-lg text-white">Date</h1>
            </div>
            <div className="absolute bottom-0 left-0 right-0 z-20 -translate-y-5 p-1 px-3 py-2 transition duration-300 group-hover:-translate-y-10 md:-translate-y-0">
                <h2 className="text-xl font-semibold text-white group-hover:text-red-500 xl:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, expedita quasi neque</h2>
                <p className="overflow-hidden text-lg text-gray-300 opacity-0 transition-opacity duration-300 group-hover:opacity-100 xl:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima consectetur</p>
            </div>
        </div>
    )
}

export default FeatureCard