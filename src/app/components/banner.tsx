import React from 'react'

function Banner
() {
  return (
    <header className='hidden md:block w-full bg-black py-5'>
        <div className=' w-3/5 m-auto flex justify-between align-middle'>
            <img src="/sabay_logo.png" className='w-28' />
            <img src="/banner_ads.gif" />
        </div>
    </header>
  )
}

export default Banner
