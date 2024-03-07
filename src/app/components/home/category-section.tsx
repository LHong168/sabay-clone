import React from 'react'
import CategorySectionList from './category-section-list'
import { fetchCategory } from '@/app/api/category'
import { CategoryData } from '@/app/share/types/category-type'

const CategorySection = async () => {
    const categories = await fetchCategory()

    return (
        <>
            {categories.data.map((category: CategoryData, index: number) => (
                <CategorySectionList
                    key={index}
                    categoryName={category.attributes.name}
                />
            ))}
        </>
    )
}

export default CategorySection
