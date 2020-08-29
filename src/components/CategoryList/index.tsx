import React from 'react'

import CategoryItem, { CategoryItemProps } from './CategoryItem'

import {
    ContainerFlatList
} from './styles'

interface CategoryListProps {
    categories: CategoryItemProps[]
}

const CategoryList: React.FC<CategoryListProps> = ({ categories }) => {
    return (
        <ContainerFlatList
            horizontal
            data={categories}
            renderItem={({ item }) => {
                const {...rest} = item
                return <CategoryItem
                    {...rest}
                />
            }}
        />
    )
}

export default CategoryList
