import React from 'react'

const Card = () => {
    return (
        <div className='group w-fit'>
            <div className='w-full bg-black group-hover:shadow-inner'>
                <img src="/maxresdefault.jpg" alt="" className='transform transition-transform ease-in-out group-hover:scale-95' />
            </div>
            <div className='py-1'>
                <h1 className='text-md text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
            </div>
        </div>
    )
}

export default Card;