'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { useParams, useSearchParams } from 'next/navigation'
import { CategoryData, CategoryType } from '@/app/share/types/category-type'
import AnimateHeight from 'react-animate-height'

function NavBar({ categories }: { categories: CategoryType }) {
    const [isOpen, setIsOpen] = useState(false)
    const [height, setHeight] = useState<any>(0)

    const params = useParams<{ category?: string }>()
    const searchParams = useSearchParams()
    const search = searchParams.get('category')

    function toggle() {
        setHeight(height === 0 ? 'auto' : 0)
        setIsOpen(!isOpen)
    }

    return (
        <nav className="bg-black md:bg-red-500 sticky top-0 z-30">
            <div className="md:hidden flex flex-wrap justify-between items-center p-3">
                {/* Toggle button for mobile */}
                <button
                    className="text-white focus:outline-none mb-1"
                    aria-expanded={height !== 0}
                    aria-controls="example-panel"
                    onClick={toggle}
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
                <div className={`md:hidden w-full`}>
                    <AnimateHeight
                        id="example-panel"
                        duration={300}
                        height={height} // see props documentation below
                    >
                        <ul className=" grid grid-cols-2 text-white">
                            <li
                                className={`mb-2 col-span-2 px-3 py-2 ${params.category === undefined ? 'bg-red-600' : 'hover:text-gray-300'}`}
                            >
                                <Link href="/" className="text-xl font-medium">
                                    Home
                                </Link>
                            </li>
                            {categories?.data.map(
                                (category: CategoryData, index: number) => (
                                    <li
                                        key={index}
                                        className={`mb-2 col-span-1 px-3 py-2 ${search || params.category === category.attributes.name ? 'bg-red-600' : 'hover:text-gray-300'}`}
                                    >
                                        <Link
                                            href={`/topics/${category.attributes.name}`}
                                            className="text-xl font-medium"
                                        >
                                            {category.attributes.name}
                                        </Link>
                                    </li>
                                )
                            )}
                        </ul>
                    </AnimateHeight>
                </div>
            </div>

            {/* Desktop navigation menu */}
            <div className="hidden md:block w-full md:w-5/6 xl:w-3/5 m-auto">
                <ul className="flex text-white font-medium">
                    <li
                        className={`p-3 ${params.category === undefined && search === null ? 'bg-red-600' : 'hover:text-gray-300'}`}
                    >
                        <Link href="/" className="text-xl font-medium">
                            Home
                        </Link>
                    </li>
                    {categories?.data.map(
                        (category: CategoryData, index: number) => (
                            <li
                                key={index}
                                className={`p-3 ${search === category.attributes.name || params.category === category.attributes.name ? 'bg-red-600' : 'hover:text-gray-300'}`}
                            >
                                <Link
                                    href={`/topics/${category.attributes.name}`}
                                    className="text-xl font-medium"
                                >
                                    {category.attributes.name}
                                </Link>
                            </li>
                        )
                    )}
                </ul>
            </div>
        </nav>
    )
}

export default NavBar
