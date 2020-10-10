import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ApplicationState } from '../../../store';
import { CategoryProxy, CategoriesTypes } from '../../../store/ducks/categories/types';

import { ContainerFlatList } from './styles';

import CategoryItem from '../../atoms/CategoryItem';

interface CategoryListProps {
    categories: CategoryProxy[]
}

const CategoryList: React.FC<CategoryListProps> = ({ categories }: CategoryListProps) => {

    const dispatch = useDispatch()
    const category = useSelector<ApplicationState, string | undefined>(state => state.categories.selectedCategory?.category)

    function handleOnPress(categoryProxy: CategoryProxy): void {
        dispatch({
            type: CategoriesTypes.SELECT,
            payload: {
                selectedCategory: categoryProxy
            }
        })
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
                    selected={category === item.category}
                    key={item.id}
                    name={item.name}
                    onPress={() => { handleOnPress(item) }}
                />
            }}
            keyExtractor={(item) => item.id}
        />

        //#endregion
    )
}

export default CategoryList;
