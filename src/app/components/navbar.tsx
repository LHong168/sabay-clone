'use client';
import React, {useState} from 'react';
import Link from 'next/link';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // <nav className='bg-red-500 sticky top-0 z-20'>
    //   <div className='w-3/5 m-auto'>
    //     <ul className='flex text-white font-medium'>
    //       <Link href="/" className='bg-red-600 p-3 font-medium'>Home</Link>
    //       <Link href="/topics/Entertainment" className='text-gray-200 p-3 hover:text-white'>Entertainment</Link>
    //     </ul>
    //   </div>
    // </nav>
    <nav className="bg-black md:bg-red-500 sticky top-0 z-20">
      <div className="sm:block md:hidden flex flex-wrap justify-between items-center p-3">
        {/* Toggle button for mobile */}
        <button
          className="text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <svg
              className="w-10 h-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-10 h-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>

        {/* Mobile navigation menu */}
        <div className={`mt-4 ${isOpen ? 'block' : 'hidden'} md:hidden w-full`}>
          <ul className="flex flex-col">
            <li className="mb-2">
              <Link href="#" className="text-white hover:text-gray-300">Home</Link>
            </li>
            <li className="mb-2">
              <Link href="#" className="text-white hover:text-gray-300">Entertainment</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Desktop navigation menu */}
      <div className='hidden md:block w-3/5 m-auto py-1'>
        <ul className='flex text-white font-medium'>
          <Link href="/" className='py-3 text-xl font-medium'>Home</Link>
          <Link href="/topics/Entertainment" className='text-gray-200 p-3 text-xl  hover:text-white'>Entertainment</Link>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar;