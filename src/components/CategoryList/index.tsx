import React from 'react'

import CategoryItem from './CategoryItem'

import {
    ContainerFlatList
} from './styles'

import { CategoryProxy } from '../../store/ducks/categories/types'

interface CategoryListProps {
    categories: CategoryProxy[]
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
                const {
                    id,
                    category,
                    name
                } = item
                return <CategoryItem
                    key={id}
                    name={name}
                    onPress={(active: boolean) => {

                    }}
                />
            }}
            keyExtractor={(item) => item.id}
        />
    )
}

export default CategoryList
