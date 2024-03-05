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
        <main className='md:py-5 bg-[#F6F6F6]'>
          <div className='md:w-5/6 xl:w-3/5 m-auto mb-5'>
            {children}
          </div>
        </main>
        <Footer></Footer>
      </>
    );
}