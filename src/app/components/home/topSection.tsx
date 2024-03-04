import React from 'react';
import FeatureCard from '../cards/featureCard';

const TopSection = () => {
  return (
        <section className='w-full flex justify-between align-middle mb-10 space-x-3'>
            <div className='md:w-3/4 md:grid md:grid-cols-7 md:grid-rows-2 flex overflow-x-auto'>
                <div className='md:col-span-4'>
                    <FeatureCard></FeatureCard>
                </div>
                <div className='md:col-span-3'>
                    <FeatureCard></FeatureCard>
                </div>
                <div className='md:col-span-4'>
                    <FeatureCard></FeatureCard>
                </div>
                <div className='md:col-span-3'>
                    <FeatureCard></FeatureCard>
                </div>
            </div>  

            <div className='hidden md:block w-1/3 space-y-3'>
            <img src="ads.png" alt="" />
            <img src="ads.png" alt="" />
            </div>
        </section>
  )
}

export default TopSection