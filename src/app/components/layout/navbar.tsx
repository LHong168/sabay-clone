'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'

function NavBar() {
    const [isOpen, setIsOpen] = useState(false)
    const params = useParams<{ category?: string }>()

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
                <div
                    className={`mt-4 ${isOpen ? 'block' : 'hidden'} md:hidden w-full`}
                >
                    <ul className=" grid grid-cols-2">
                        <li className="mb-2 col-span-2 px-3 py-2 bg-red-600">
                            <Link href="/" className="text-white">
                                Home
                            </Link>
                        </li>
                        <li className="mb-2 px-3 py-2">
                            <Link
                                href="/topics/Entertainment"
                                className="text-white"
                            >
                                Entertainment
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Desktop navigation menu */}
            <div className="hidden md:block w-full md:w-5/6 xl:w-3/5 m-auto">
                <ul className="flex text-white font-medium">
                    <li
                        className={`p-3 ${params.category === undefined ? 'bg-red-600' : 'hover:text-gray-300'}`}
                    >
                        <Link href="/" className="text-xl font-medium">
                            Home
                        </Link>
                    </li>
                    <li
                        className={`p-3 ${params.category === 'Entertainment' ? 'bg-red-600' : 'hover:text-gray-300'}`}
                    >
                        <Link
                            href="/topics/Entertainment"
                            className="text-xl font-medium"
                        >
                            Entertainment
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar
