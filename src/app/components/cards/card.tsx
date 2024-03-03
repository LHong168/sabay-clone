import React from 'react'

const Card = () => {
  return (
    <div className='group'>
        <div className='bg-black group-hover:shadow-inner'>
        <img src="/maxresdefault.jpg" alt="" className='transition-transform ease-in-out transform group-hover:scale-95' />
        </div>
        <div className=' px-1 py-3'>
          <h1 className='text-black text-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
        </div>
    </div>
  )
}

export default Card;