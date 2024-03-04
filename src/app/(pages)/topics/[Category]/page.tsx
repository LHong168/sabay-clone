import ParentLayout from '@/app/components/layout';
import React from 'react'
import CategoryPage from './categoryPage';

function Category({ params }: { params: { category: string } }) {
  const category = params?.category;

  return (
    <ParentLayout>
      <CategoryPage category={category}></CategoryPage>
    </ParentLayout>
  )
}

export default Category;