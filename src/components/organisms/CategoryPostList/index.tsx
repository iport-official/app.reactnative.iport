import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { ApplicationState } from '../../../store';
import { LoadCategoriesRequestAction } from '../../../store/ducks/categories/sagas';
import { CategoryProxy, CategoriesTypes } from '../../../store/ducks/categories/types';
import { LoadPostsByCategoryAction } from '../../../store/ducks/categoriesPosts/sagas';
import { CategoriesPostsTypes, CategoryPostProxy } from '../../../store/ducks/categoriesPosts/types';
import { BaseArrayProxy } from '../../../store/ducks/common/base-array-proxy';

import {
    ContainerView,
    TitleText
} from './styles';

import PostList from '../../atoms/Views/PostList';
import CategoryList from '../../molecules/CategoryList';
import PostItem from '../../molecules/PostItem';

interface CategoryPostListProps {
    title: string
}

const CategoryPostList: React.FC<CategoryPostListProps> = ({ title }: CategoryPostListProps) => {

    const dispatch = useDispatch();

    const selectedCategory = useSelector<ApplicationState, CategoryProxy | null>(state => state.categories.selectedCategory);
    const categoryArray = useSelector<ApplicationState, BaseArrayProxy<CategoryProxy>>(state => state.categories.categories);

    const loadingPostsByCategory = useSelector<ApplicationState, boolean>(state => state.categoriesPosts.loadingCategoriesPosts);
    const { array } = useSelector<ApplicationState, BaseArrayProxy<CategoryPostProxy>>(state => state.categoriesPosts.categoriesPosts);

    const [categoryListPage, setCategoryListPage] = useState<number>(0);
    const [categoryPostListPage, setCategoryPostListPage] = useState<number>(0);

    useEffect(() => { loadCategoryList(true, 0) }, []);
    useEffect(() => { loadPostsByCategory(true, 0) }, [selectedCategory]);

    function loadCategoryList(shouldStart = false, pageNumber: number = categoryListPage) {
        dispatch<LoadCategoriesRequestAction>({
            type: CategoriesTypes.LOAD_REQUEST,
            payload: {
                pageNumber,
                shouldStart
            }
        });

        setCategoryListPage(pageNumber + 1);
    }

    function loadPostsByCategory(
        shouldStart = false,
        pageNumber: number = categoryPostListPage
    ) {
        if (selectedCategory === null)
            return;

        dispatch<LoadPostsByCategoryAction>({
            type: CategoriesPostsTypes.LOAD_POSTS_BY_CATEGORY_REQUEST,
            payload: {
                pageNumber,
                category: selectedCategory,
                shouldStart
            }
        });

        setCategoryPostListPage(pageNumber + 1);
    }

    return (
        //#region JSX

        <ContainerView>
            <TitleText>{title}</TitleText>
            <CategoryList categories={categoryArray.array} />
            <PostList
                data={array}
                onEndReached={() => { loadPostsByCategory() }}
                loadingPosts={loadingPostsByCategory}
                keyExtractor={item => item.id}
                renderItem={({ item }) => {
                    const { id, ...rest } = item
                    return (
                        <PostItem
                            key={id}
                            id={id}
                            {...rest}
                        />
                    )
                }}
            />
        </ContainerView>

        //#endregion
    )

}

export default CategoryPostList;
