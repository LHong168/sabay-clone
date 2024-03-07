import React from 'react'

const categoryColors = {
    entertainment: {
        bg: 'bg-pink-500',
        corner: 'border-l-pink-500',
        borderBottom: 'border-b-pink-500',
    },
    technology: {
        bg: 'bg-blue-500',
        corner: 'border-l-blue-500',
        borderBottom: 'border-b-blue-500',
    },
}

const CategoryPageTag = ({ categoryName }: { categoryName: string }) => {
    // Determine the tag color based on the category name
    const tagClass = categoryColors[categoryName as keyof typeof categoryColors]

    return (
        <div className={`w-full border-b-4 ${tagClass.borderBottom}`}>
            <div className={`relative w-fit ${tagClass.bg} px-4 py-2`}>
                <div
                    className={`triangle left-[100%] top-0 border-l-[15px] ${tagClass.corner}`}
                ></div>
                <p className="text-md text-center text-white">{categoryName}</p>
            </div>
        </div>
    )
}

export default CategoryPageTag
