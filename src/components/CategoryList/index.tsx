import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { ApplicationState } from '../../store'
import { CategoryProxy, CategoriesTypes } from '../../store/ducks/categories/types'

import CategoryItem from './CategoryItem'

import { ContainerFlatList } from './styles'

interface CategoryListProps {
    categories: CategoryProxy[]
}

const CategoryList: React.FC<CategoryListProps> = ({ categories }) => {

    const dispatch = useDispatch()
    const category = useSelector<ApplicationState, CategoryProxy | null>(state => state.categories.select)

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
                const {
                    id,
                    category,
                    name
                } = item
                return <CategoryItem
                    key={id}
                    name={name}
                    onPress={(active: boolean) => {
                        if (active)
                            dispatch({
                                type: CategoriesTypes.SELECT,
                                payload: {
                                    select: item
                                }
                            })
                    }}
                />
            }}
            keyExtractor={(item) => item.id}
        />

        //#endregion
    )
}

export default CategoryList
