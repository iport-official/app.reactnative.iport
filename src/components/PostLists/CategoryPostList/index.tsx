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

    const [page, setPage] = useState<number>(0)
    const [loading, setLoading] = useState<boolean>(false)
    const [data, setData] = useState<PostProxy[]>([])

    const category = useSelector<ApplicationState, CategoryProxy | null>(state => state.categories.select)

    const handleViewabilityConfig = useRef({ viewAreaCoveragePercentThreshold: 50 })

    const handleOnViewableItemsChanged = useRef((viewableItems: {
        viewableItems: ViewToken[];
        changed: ViewToken[];
    }) => {
        // console.log(viewableItems)
    })

    const dispatch = useDispatch()
    const { array } = useSelector<ApplicationState, BaseArrayProxy<CategoryProxy>>(state => state.categories.data)

    async function loadData(pageNumber: number = page) {
        setLoading(true)
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
        setPage(pageNumber + 1)
        setLoading(false)
    }

    useEffect(() => {
        loadData()
        dispatch({ type: CategoriesTypes.LOAD_REQUEST })
    }, [])

    return (
        //#region JSX

        <ContainerView>
            <TitleText>{title}</TitleText>
            <CategoryList categories={array} />
            <PostFlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={data}
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
            />
        </ContainerView>

        //#endregion
    )

}

export default CategoryPostList
