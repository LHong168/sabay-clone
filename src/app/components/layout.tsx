import React from 'react'
import NavBar from './layout/navbar'
import Banner from './layout/banner'
import Footer from './layout/footer'
import { fetchCategory } from '../api/category'

export default async function ParentLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    const categories = await fetchCategory()
    return (
        <>
            <Banner></Banner>
            <NavBar categories={categories}></NavBar>
            <main className="bg-[#F6F6F6] md:py-5">
                <div className="m-auto md:w-5/6 xl:w-3/5">{children}</div>
            </main>
            <Footer></Footer>
        </>
    )
}
