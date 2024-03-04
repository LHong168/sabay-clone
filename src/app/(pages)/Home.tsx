import React from 'react';
import TopSection from '../components/home/topSection';
import VideoSection from '../components/home/videoSection';
import CategorySection from '../components/home/categorySection';

const HomePage = () => {
  return (
    <div className='md:w-3/5 m-auto'>
      
      <TopSection></TopSection>

      <VideoSection></VideoSection>

      <CategorySection></CategorySection>
    </div>
  )
}

export default HomePage