import React, { useRef } from 'react'
import { ViewToken } from 'react-native'

import PostItem, { PostItemProps } from '../PostItem'

import {
    ContainerView,
    TitleText,
    PostFlatList
} from './styles'

interface PostListProps {
    title: string
    data: PostItemProps[]
}

const PostList: React.FC<PostListProps> = ({ title, data }) => {
    const handleViewabilityConfig = useRef({ viewAreaCoveragePercentThreshold: 50 })

    const handleOnViewableItemsChanged = useRef((viewableItems: {
        viewableItems: ViewToken[];
        changed: ViewToken[];
    }) => {
        console.log(viewableItems)

    })

    return (
        //#region JSX

        <ContainerView>
            {/* <TitleText>Hot Jobs</TitleText> */}
            <TitleText>{ title }</TitleText>
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
