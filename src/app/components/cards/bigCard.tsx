import React from 'react'

const BigCard = () => {
  return (
    <div className='group'>
        <div className='bg-black w-full group-hover:shadow-[inset_0_-2px_4px_rgba(5,5,5,5)]'>
            <img src="/maxresdefault.jpg" alt="" className='transition-transform ease-in-out transform group-hover:scale-95' />
        </div>
        <div className='py-1'>
          <h1 className='text-black text-lg font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
        </div>
    </div>
  )
}

export default BigCard;