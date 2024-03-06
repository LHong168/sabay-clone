import React from 'react'
import TopSection from '../components/home/top-section'
import VideoSection from '../components/home/video-section'
import CategorySection from '../components/home/category-section'

const HomePage = async () => {
    return (
        <>
            <TopSection />

            <VideoSection />

            <CategorySection categoryName={'entertainment'} />
        </>
    )
}

export default HomePage
