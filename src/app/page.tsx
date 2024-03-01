import React from 'react';
import ParentLayout from './components/layout';

function page() {
  return (
      <>
        <ParentLayout>
          <main className='bg-[#F6F6F6] h-screen py-3'>
            <div className='w-4/5 m-auto'>Home Page</div>
          </main>
        </ParentLayout>
      </>
  )
}

export default page;
