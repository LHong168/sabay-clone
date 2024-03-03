import React from 'react';
import Link from 'next/link';

function NavBar() {
  return (
    <nav className='bg-red-500 sticky top-0 z-20'>
      <div className='w-3/5 m-auto'>
        <ul className='flex text-white font-medium'>
          <Link href="/" className='bg-red-600 p-3 font-medium'>Home</Link>
          <Link href="/topics/Entertainment" className='text-gray-200 p-3 hover:text-white'>Entertainment</Link>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar;