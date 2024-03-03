import React from 'react'

const HotNews = () => {
  return (
      <div>
        <h1 className='text-xl font-bold'>Hot News</h1>

        <hr className=' border-[3px] border-red-500 my-5 w-20'/>

        <div className='space-y-5'>
            <div className='flex space-x-3'>
                <img src="/maxresdefault.jpg" alt="" className=' w-14 h-14' />
                <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h2>
            </div>
            <div className='flex space-x-3'>
                <img src="/maxresdefault.jpg" alt="" className=' w-14 h-14' />
                <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h2>
            </div>
            <div className='flex space-x-3'>
                <img src="/maxresdefault.jpg" alt="" className=' w-14 h-14' />
                <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h2>
            </div>
            <div className='flex space-x-3'>
                <img src="/maxresdefault.jpg" alt="" className=' w-14 h-14' />
                <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h2>
            </div>
            <div className='flex space-x-3'>
                <img src="/maxresdefault.jpg" alt="" className=' w-14 h-14' />
                <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h2>
            </div>
        </div>
      </div>
  )
}

export default HotNews