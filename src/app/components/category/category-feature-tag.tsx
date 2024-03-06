import React from "react";

const categoryColors = {
  entertainment: "blue-500",
  technology: "blue-500",
};

const CategoryFeatureTag = ({ categoryName }: { categoryName: string }) => {
  // Determine the tag color based on the category name
  const tagClass = categoryColors[categoryName as keyof typeof categoryColors];

  return (
    <div className={`absolute left-0 top-5 px-4 py-2 bg-${tagClass}`}>
      <p className="text-md text-center text-white">{categoryName}</p>
      <div
        className={`triangle left-full top-0 border-l-${tagClass} border-l-[15px]`}
      ></div>
    </div>
  );
};

export default CategoryFeatureTag;
