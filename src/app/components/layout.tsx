import React from 'react';
import NavBar from './navbar';
import Banner from './banner';
import Footer from './footer';

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
        <main className='py-5 bg-[#F6F6F6]'>{children}</main>
        <Footer></Footer>
      </>
    );
}