import React from "react";

const categoryColors = {
  Entertainment: "pink-500",
  Technology: "blue-500",
};

const CategoryPageTag = ({ categoryName }: { categoryName: string }) => {
  // Determine the tag color based on the category name
  const tagClass = categoryColors[categoryName as keyof typeof categoryColors];

  return (
    <div className={`w-full border-b-4 border-b-${tagClass}`}>
      <div className={`relative w-fit bg-${tagClass} px-4 py-2`}>
        <div
          className={`triangle left-[100%] top-0 border-l-[15px] border-l-${tagClass}`}
        ></div>
        <p className="text-md text-center text-white">Category</p>
      </div>
    </div>
  );
};

export default CategoryPageTag;
