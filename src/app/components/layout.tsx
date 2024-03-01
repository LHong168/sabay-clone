import React from 'react';
import NavBar from './navbar';
import Banner from './banner';
import Footer from './footer';

export default function ParentLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <>
        <Banner></Banner>
        <NavBar></NavBar>
        <div>{children}</div>
        <Footer></Footer>
      </>
    );
}