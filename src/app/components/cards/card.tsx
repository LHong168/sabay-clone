import React from 'react'

const Card = () => {
  return (
    <div className='group w-auto'>
        <div className='bg-black group-hover:shadow-inner w-full'>
          <img src="/maxresdefault.jpg" alt="" className='transition-transform ease-in-out transform group-hover:scale-95' />
        </div>
        <div className='py-1'>
          <h1 className='text-black text-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
        </div>
    </div>
  )
}

export default Card;