import React from "react";

const RecentNews = () => {
  return (
    <div className="w-full p-3">
      <h1 className="text-xl font-bold">Recent News</h1>

      <hr className=" my-5 w-20 border-[3px] border-red-500" />

      <div className="space-y-5">
        <div className="flex space-x-3">
          <img
            src="/maxresdefault.jpg"
            alt=""
            className="h-14 w-14 object-cover"
          />
          <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h2>
        </div>
        <div className="flex space-x-3">
          <img
            src="/maxresdefault.jpg"
            alt=""
            className="h-14 w-14 object-cover"
          />
          <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h2>
        </div>
        <div className="flex space-x-3">
          <img
            src="/maxresdefault.jpg"
            alt=""
            className="h-14 w-14 object-cover"
          />
          <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h2>
        </div>
        <div className="flex space-x-3">
          <img
            src="/maxresdefault.jpg"
            alt=""
            className="h-14 w-14 object-cover"
          />
          <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h2>
        </div>
        <div className="flex space-x-3">
          <img
            src="/maxresdefault.jpg"
            alt=""
            className="h-14 w-14 object-cover"
          />
          <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h2>
        </div>
      </div>
    </div>
  );
};

export default RecentNews;
