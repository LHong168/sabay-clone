'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { useParams, useSearchParams } from 'next/navigation'
import { CategoryData, CategoryType } from '@/app/share/types/category-type'
import AnimateHeight from 'react-animate-height'

function ToggleButton({
    isOpen,
    toggle,
}: {
    isOpen: boolean
    toggle: () => void
}) {
    return (
        <button
            className="text-white focus:outline-none mb-1"
            aria-expanded={isOpen}
            aria-controls="example-panel"
            onClick={toggle}
        >
            {isOpen ? (
                <img src="/icons/close.png" alt="Close" className="w-8 h-8" />
            ) : (
                <img src="/icons/menu.png" alt="Menu" className="w-8 h-8" />
            )}
        </button>
    )
}

function NavBar({ categories }: { categories: CategoryType }) {
    const [isOpen, setIsOpen] = useState(false)
    const [height, setHeight] = useState<any>(0)
    const params = useParams<{ category?: string }>()
    const searchParams = useSearchParams()
    const search = searchParams.get('category')
    const activeCategory = search || params.category // Set active category based on search params or dynamic route parameter

    function toggle() {
        setHeight(height === 0 ? 'auto' : 0)
        setIsOpen(!isOpen)
    }

    return (
        <nav className="bg-black md:bg-red-500 sticky top-0 z-30">
            {/* mobile view */}
            <div className="md:hidden flex flex-wrap justify-between items-center p-3">
                <ToggleButton isOpen={isOpen} toggle={toggle} />
                <div className={`w-full ${isOpen ? 'block' : 'hidden'}`}>
                    <AnimateHeight
                        id="example-panel"
                        duration={300}
                        height={height}
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
                                        className={`mb-2 col-span-1 px-3 py-2 ${activeCategory === category.attributes.name ? 'bg-red-600' : 'hover:text-gray-300'}`}
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

            {/* desktop view */}
            <div className="hidden md:block w-full md:w-5/6 xl:w-3/5 m-auto">
                <ul className="flex text-white font-medium">
                    <li
                        className={`p-3 ${activeCategory === undefined && search === null ? 'bg-red-600' : 'hover:text-gray-300'}`}
                    >
                        <Link href="/" className="text-xl font-medium">
                            <img
                                src="/icons/home-icon.png" // Path to your SVG image in the public directory
                                alt="home"
                                className="w-8 h-8"
                            />
                        </Link>
                    </li>
                    {categories?.data.map(
                        (category: CategoryData, index: number) => (
                            <li
                                key={index}
                                className={`p-3 ${activeCategory === category.attributes.name ? 'bg-red-600' : 'hover:text-gray-300'}`}
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
