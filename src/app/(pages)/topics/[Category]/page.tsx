import React from 'react'
import CategoryPage from './category-page'

function Category({ params }: { params: { category: string } }) {
    const category = params?.category

    return <CategoryPage category={category}></CategoryPage>
}

export default Category
