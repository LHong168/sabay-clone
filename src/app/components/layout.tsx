import React from "react";
import NavBar from "./layout/navbar";
import Banner from "./layout/banner";
import Footer from "./layout/footer";

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
      <main className="bg-[#F6F6F6] md:py-5">
        <div className="m-auto mb-5 md:w-5/6 xl:w-3/5">{children}</div>
      </main>
      <Footer></Footer>
    </>
  );
}
