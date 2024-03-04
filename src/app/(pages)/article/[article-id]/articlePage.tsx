import React from 'react';
import HotNews from '@/app/components/sideNews/hotNews';
import RecentNews from '@/app/components/sideNews/recentNews';

const ArticlePage = async () => {

  const article = await fetch('http://localhost:1337/api/articles/1', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(response => response.json())
    .then(data => {
      return data; // Return data here
    });

  return (
    <div className='w-3/5 m-auto flex space-x-10 mb-5'>
      <section className='w-2/3 bg-white shadow-lg p-5'>
        <div>
          <h1 className='text-2xl'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae est eveniet quas, quis ea culpa nulla laborum? A provident</h1>
          <p className='my-5 text-gray-500'>time</p>
        </div>

        <hr className='my-5' />

        {/* <div className='text-justify' dangerouslySetInnerHTML={{ __html: article.data.attributes.content }} /> */}

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