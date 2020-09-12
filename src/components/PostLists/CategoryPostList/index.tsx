import React, { useEffect, useRef, useState } from 'react'
import { ViewToken } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'

import { BaseArrayProxy } from '../../../services/base-array-proxy'
import { PostProxy } from '../../../services/Post/post.proxy'
import { ApplicationState } from '../../../store'
import { CategoryProxy, CategoriesTypes } from '../../../store/ducks/categories/types'

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
    const categories = useSelector<ApplicationState, BaseArrayProxy<CategoryProxy>>(state => state.categories.categories)

    const [page, setPage] = useState<number>(0)

    const handleViewabilityConfig = useRef({ viewAreaCoveragePercentThreshold: 50 })
    const handleOnViewableItemsChanged = useRef((viewableItems: {
        viewableItems: ViewToken[];
        changed: ViewToken[];
    }) => {
        // console.log(viewableItems)
    })

    function loadCategoryTypes(pageNumber: number = page, shouldStart: boolean = false) {
        dispatch({
            type: CategoriesTypes.LOAD_REQUEST,
            payload: {
                pageNumber,
                shouldStart
            }
        })

        setPage(pageNumber + 1)
    }

    useEffect(() => { loadCategoryTypes() }, [])

    return (
        //#region JSX

        <ContainerView>
            <TitleText>{title}</TitleText>
            <CategoryList categories={categories.array} />
            {/* <PostFlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={categoriesPosts}
                onEndReached={() => { loadData() }}
                onEndReachedThreshold={0.1}
                ListFooterComponent={(
                    <EndFlatListActivityIndicator
                        style={{
                            display: loading ? 'flex' : 'none'
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
                onViewableItemsChanged={handleOnViewableItemsChanged.current}
                viewabilityConfig={handleViewabilityConfig.current}
                contentContainerStyle={{
                    alignItems: "center"
                }}
            /> */}
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
