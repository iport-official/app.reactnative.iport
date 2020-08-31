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
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
                flexGrow: 1,
                alignItems: 'stretch'
            }}
            data={categories}
            renderItem={({ item }) => {
                const { ...rest } = item
                return <CategoryItem
                    {...rest}
                />
            }}
            keyExtractor={(item) => item.id}
        />
    )
}

export default CategoryList
