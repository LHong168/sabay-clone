import React from 'react'
import HotNews from './hot-news'
import RecentNews from './recent-news'

const SideNews = () => {
    return (
        <section className="mt-5 flex h-fit flex-wrap justify-center md:w-1/3">
            <img src="/ads.png" alt="" className="mb-10 w-1/2 md:w-full" />

            <HotNews />

            <img src="/ads.png" alt="" className="my-10 w-1/2 md:w-full" />

            <RecentNews />

            <img src="/ads.png" alt="" className="my-10 w-1/2 md:w-full" />
        </section>
    )
}

export default SideNews
