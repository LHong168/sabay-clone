import React from "react";
import ParentLayout from "./components/layout";
import HomePage from "./(pages)/Home";

function page() {
  return (
    <>
      <ParentLayout>
        <HomePage></HomePage>
      </ParentLayout>
    </>
  );
}

export default page;
