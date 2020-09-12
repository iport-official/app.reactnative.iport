import React from 'react'
import { useDispatch } from 'react-redux'

import { CategoryProxy, CategoriesTypes } from '../../store/ducks/categories/types'

import CategoryItem from './CategoryItem'

import { ContainerFlatList } from './styles'

interface CategoryListProps {
    categories: CategoryProxy[]
}

const CategoryList: React.FC<CategoryListProps> = ({ categories }) => {

    const dispatch = useDispatch()

    function handleOnPress(value: boolean, categoryProxy: CategoryProxy) {
        if (value) {
            dispatch({
                type: CategoriesTypes.SELECT,
                payload: {
                    selectedCategory: categoryProxy
                }
            })
        }
    }

    return (
        //#region JSX

        <ContainerFlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
                flexGrow: 1,
                alignItems: 'stretch'
            }}
            data={categories}
            renderItem={({ item }) => {
                return <CategoryItem
                    key={item.id}
                    name={item.name}
                    onPress={(active: boolean) => { handleOnPress(active, item) }}
                />
            }}
            keyExtractor={(item) => item.id}
        />

        //#endregion
    )
}

export default CategoryList
