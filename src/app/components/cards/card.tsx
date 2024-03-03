import React from 'react'

const Card = () => {
  return (
    <div className='group'>
        <div className='bg-black group-hover:shadow-inner'>
        <img src="/maxresdefault.jpg" alt="" className='transition-transform ease-in-out transform group-hover:scale-95' />
        </div>
        <h1 className='text-black text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
    </div>
  )
}

export default Card;