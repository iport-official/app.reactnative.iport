import React, { useRef } from 'react'
import { ViewToken } from 'react-native'

import PostItem from '../../PostItem'

import {
    ContainerView,
    PostFlatList
} from './styles'

import { PostProxy } from '../../../services/Post/post.proxy'

export interface PostListProps {
    onEndReached?(): void
    onEndReachedThreshold?: number
    data: PostProxy[]
}

const PostList: React.FC<PostListProps> = ({ onEndReached, onEndReachedThreshold, data }) => {
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
            <PostFlatList
                horizontal
                onEndReached={() => {
                    if (onEndReached)
                        onEndReached()
                }}
                onEndReachedThreshold={onEndReachedThreshold}
                showsHorizontalScrollIndicator={false}
                data={data}
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
                keyExtractor={item => item.id}
                onViewableItemsChanged={handleOnViewableItemsChanged.current}
                viewabilityConfig={handleViewabilityConfig.current}
            />
        </ContainerView>

        //#endregion
    )
}

export default PostList
