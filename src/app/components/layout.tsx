import React from 'react';
import NavBar from './layout/navbar';
import Banner from './layout/banner';
import Footer from './layout/footer';

export default function ParentLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    // default layout for every page including top banner, navbar and footer
    // the children is the different page that will display 
    return (
      <>
        <Banner></Banner>
        <NavBar></NavBar>
        <main className='md:py-5 bg-[#F6F6F6]'>{children}</main>
        <Footer></Footer>
      </>
    );
}