import React from 'react'

function NavBar() {
  return (
    <nav className='bg-red-500 sticky top-0'>
      <div className='w-4/5 m-auto'>
        <ul className='flex text-white font-medium'>
          <li className='bg-red-600 p-3 font-medium'>Home</li>
          <li className='text-gray-200 p-3 hover:text-white'>Entertainment</li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar;