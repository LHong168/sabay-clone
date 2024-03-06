import React from 'react'

const categoryColors = {
    entertainment: {
        bg: 'bg-pink-500',
        corner: 'border-l-pink-500',
    },
    technology: {
        bg: 'bg-blue-500',
        corner: 'border-l-blue-500',
    },
}

const CategoryFeatureTag = ({ categoryName }: { categoryName: string }) => {
    // Determine the tag color based on the category name
    const tagClass = categoryColors[categoryName as keyof typeof categoryColors]

    return (
        <div className={`absolute left-0 top-5 px-4 py-2 ${tagClass.bg}`}>
            <p className="text-md text-center text-white">{categoryName}</p>
            <div
                className={`triangle left-full top-0 ${tagClass.corner} border-l-[15px]`}
            ></div>
        </div>
    )
}

export default CategoryFeatureTag
