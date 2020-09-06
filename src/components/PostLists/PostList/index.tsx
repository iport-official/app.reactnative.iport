import React, { useRef, useEffect, useState } from 'react'
import { ViewToken } from 'react-native'
import * as SecureStore from 'expo-secure-store';

import PostItem from '../../PostItem'

import {
    ContainerView,
    TitleText,
    PostFlatList
} from './styles'

import { PostProxy } from '../../../services/Post/post.proxy'

import api from '../../../services/api'

export interface PostListProps {
    category: string
}

const PostList: React.FC<PostListProps> = ({ category }) => {

    const [data, setData] = useState<PostProxy[]>([])

    async function loadData(category: string) {
        const token = await SecureStore.getItemAsync('access_token')
        const response = await api.get<PostProxy[]>(`posts/recomendations?category=${category}&page=0`, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })

        setData(response.data)
    }

    useEffect(() => {
        loadData(category)
    }, [])

    const handleViewabilityConfig = useRef({ viewAreaCoveragePercentThreshold: 50 })

    const handleOnViewableItemsChanged = useRef((viewableItems: {
        viewableItems: ViewToken[];
        changed: ViewToken[];
    }) => {
        // console.log(viewableItems)
    })

    return (
        //#region JSX

        <ContainerView>
            <TitleText>{category}</TitleText>
            <PostFlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={data}
                renderItem={({ item }) => {
                    const { ...rest } = item
                    return (
                        <PostItem
                            {...rest}
                        />
                    )
                }}
                keyExtractor={item => item.id}
                onViewableItemsChanged={handleOnViewableItemsChanged.current}
                viewabilityConfig={handleViewabilityConfig.current}
            />
        </ContainerView>

        //#endregion
    )
}

export default PostList
