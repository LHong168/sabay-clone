import React from 'react';
import HotNews from '@/app/components/sideNews/hotNews';
import RecentNews from '@/app/components/sideNews/recentNews';

const ArticlePage = () => {
  return (
    <div className='w-3/5 m-auto flex space-x-10 mb-5'>
      <section className='w-2/3 bg-white shadow-lg p-5'>
        <div>
          <h1 className='text-2xl'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae est eveniet quas, quis ea culpa nulla laborum? A provident</h1>
          <p className='my-5 text-gray-500'>time</p>
        </div>

        <hr className='my-5' />

        <div className='text-justify'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis doloremque delectus, blanditiis neque magni temporibus fugit, asperiores quisquam reiciendis quae harum dolores officia quaerat, odit et sint quam repudiandae repellat.</p>
          <img src="/maxresdefault.jpg" alt="" className='my-5' />
        </div>

        <p className='my-5'>author</p>

      </section>

      <section className='w-1/3'>

        <img src="/ads.png" alt="" className='mb-10' />

        <HotNews></HotNews>

        <img src="/ads.png" alt="" className='my-10' />

        <RecentNews></RecentNews>

        <img src="/ads.png" alt="" className='my-10' />

      </section>
    </div>
  )
}

export default ArticlePage;