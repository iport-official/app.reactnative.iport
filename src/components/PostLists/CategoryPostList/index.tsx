import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { BaseArrayProxy } from '../../../services/base-array-proxy'
import { PostProxy } from '../../../services/Post/post.proxy'
import { ApplicationState } from '../../../store'
import { CategoryProxy, CategoriesTypes } from '../../../store/ducks/categories/types'
import { PostsTypes } from '../../../store/ducks/posts/types'

import CategoryList from '../../CategoryList'
import PostItem from '../../PostItem'

import {
    ContainerView,
    TitleText,
    PostFlatList,
    EndFlatListActivityIndicator
} from './styles'

interface CategoryPostListProps {
    title: string
}

const CategoryPostList: React.FC<CategoryPostListProps> = ({ title }) => {

    const dispatch = useDispatch()

    const selectedCategory = useSelector<ApplicationState, CategoryProxy | null>(state => state.categories.selectedCategory)
    const categoryArray = useSelector<ApplicationState, BaseArrayProxy<CategoryProxy>>(state => state.categories.categories)

    const loadingPostsByCategory = useSelector<ApplicationState, boolean>(state => state.posts.loadingCategories)
    const { array } = useSelector<ApplicationState, BaseArrayProxy<PostProxy>>(state => state.posts.categories)

    const [categoryListPage, setCategoryListPage] = useState<number>(0)
    const [categoryPostListPage, setCategoryPostListPage] = useState<number>(0)

    useEffect(() => { loadCategoryList(true, 0) }, [])
    useEffect(() => { loadPostsByCategory(true, 0) }, [selectedCategory])

    function loadCategoryList(shouldStart: boolean = false, pageNumber: number = categoryListPage) {
        dispatch({
            type: CategoriesTypes.LOAD_REQUEST,
            payload: {
                pageNumber,
                shouldStart
            }
        })

        setCategoryListPage(pageNumber + 1)
    }

    function loadPostsByCategory(
        shouldStart: boolean = false,
        pageNumber: number = categoryPostListPage
    ) {
        if (selectedCategory === null)
            return;

        dispatch({
            type: PostsTypes.LOAD_POSTS_BY_CATEGORY_REQUEST,
            payload: {
                pageNumber,
                category: selectedCategory,
                shouldStart
            }
        })

        setCategoryPostListPage(pageNumber + 1)
    }

    return (
        //#region JSX

        <ContainerView>
            <TitleText>{title}</TitleText>
            <CategoryList categories={categoryArray.array} />
            <PostFlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={array}
                onEndReached={() => { loadPostsByCategory() }}
                onEndReachedThreshold={0.1}
                ListFooterComponent={(
                    <EndFlatListActivityIndicator
                        style={{
                            display: loadingPostsByCategory ? 'flex' : 'none'
                        }}
                    />
                )}
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
                contentContainerStyle={{
                    alignItems: "center"
                }}
            />
        </ContainerView>

        //#endregion
    )

}

export default CategoryPostList

//#region Old code
// const token = await getItemAsync('access_token')
// const response = await api.get<BaseArrayProxy<PostProxy>>(`posts/categories?page=${pageNumber}`, {
//     headers: {
//         Authorization: 'Bearer ' + token
//     }
// })
// setData([
//     ...data,
//     ...response.data.array
// ])
//#endregion
