import React, { useRef, useState } from 'react'
import { ViewToken, Animated } from 'react-native'

import PostItem, { PostItemProps } from '../Post'

import {
    ContainerView,
    TitleText,
    PostFlatList
} from './styles'

import backgroundPhoto from '../../assets/eifel_tower.jpg'
import profilePhoto from '../../assets/foto_example.png'

const testData: PostItemProps[] = [
    {
        id: '0',
        imageSource: backgroundPhoto,
        profileImageSource: profilePhoto,
        profile: 'Scarlett Johansson',
        title: 'Scarlett Johansson is hiring programmers right now',
        publishingDate: '3 hours ago',
        coinsAmount: 130
    },
    {
        id: '1',
        imageSource: backgroundPhoto,
        profileImageSource: profilePhoto,
        profile: 'Scarlett Johansson',
        title: 'Scarlett Johansson is hiring programmers right now',
        publishingDate: '3 hours ago',
        coinsAmount: 130
    },
    {
        id: '2',
        imageSource: backgroundPhoto,
        profileImageSource: profilePhoto,
        profile: 'Scarlett Johansson',
        title: 'Scarlett Johansson is hiring programmers right now',
        publishingDate: '3 hours ago',
        coinsAmount: 130
    }
]

const PostList = () => {
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
            <PostFlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={testData}
                renderItem={({ item }) => {
                    const { ...rest } = item
                    return (
                        <PostItem {...rest} />
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
