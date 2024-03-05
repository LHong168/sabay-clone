'use client';
import React, {useState} from 'react';
import Link from 'next/link';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black md:bg-red-500 sticky top-0 z-30">
      <div className="md:hidden flex flex-wrap justify-between items-center p-3">
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
          <ul className=" grid grid-cols-2">
            <li className="mb-2 col-span-2 px-3 py-2 hover:bg-red-500">
              <Link href="/" className="text-white hover:text-gray-300">Home</Link>
            </li>
            <li className="mb-2 px-3 py-2">
              <Link href="/topics/Entertainment" className="text-white hover:text-gray-300">Entertainment</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Desktop navigation menu */}
      <div className='hidden md:block py-1 w-full md:w-5/6 xl:w-3/5 m-auto'>
        <ul className='flex text-white font-medium'>
          <Link href="/" className='py-3 text-xl font-medium'>Home</Link>
          <Link href="/topics/Entertainment" className='text-gray-200 p-3 text-xl  hover:text-white'>Entertainment</Link>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar;