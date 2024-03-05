import React from 'react';
import TopSection from '../components/home/top-section';
import VideoSection from '../components/home/video-section';
import CategorySection from '../components/home/category-section';

async function fetchArticles() {
    const requestOptions = {
        headers: {
            Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
        },
    };

    try {
        const res = await fetch(`${process.env.STRAPI_API_URL}/articles?populate=*&pagination[pageSize]=4`, requestOptions)
        const response = await res.json();
        return response;
    } catch(err) {
        console.error(err);
    }
    
}

const HomePage = async () => {

    const articles  = await fetchArticles();

    return (
        <>
            <TopSection articles={articles?.data} />

            {/* <VideoSection /> */}

            <CategorySection/>
        </>
    )
}

export default HomePage