import React, { useRef, useState } from 'react'
import { ViewToken, Animated } from 'react-native'

import PostItem, { PostItemProps } from '../Post'

import {
    ContainerView,
    TitleText,
    PostFlatList
} from './styles'

import profilePhoto from '../../assets/foto_example.png'
import photo02 from '../../assets/photo02.jpg'
import photo3 from '../../assets/netflix.jpg'

import backgroundPhoto01 from '../../assets/image01.jpg'
import backgroundPhoto02 from '../../assets/image02.png'
import backgroundPhoto03 from '../../assets/madmax.jpg'

const testData: PostItemProps[] = [
    {
        id: '0',
        imageSource: backgroundPhoto01,
        profileImageSource: profilePhoto,
        profile: 'Scarlett Johansson',
        title: 'Scarlett Johansson is hiring programmers right now',
        publishingDate: '3 hours ago',
        coinsAmount: 1300
    },
    {
        id: '1',
        imageSource: backgroundPhoto02,
        profileImageSource: photo02,
        profile: 'Erick Escagion',
        title: 'Erick Escagion have created a new tech',
        publishingDate: '2 weeks ago',
        coinsAmount: 0
    },
    {
        id: '2',
        imageSource: backgroundPhoto03,
        profileImageSource: photo3,
        profile: 'Netflix',
        title: 'Netflix is sharing new movies...',
        publishingDate: '1 year ago',
        coinsAmount: 12560
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
            <TitleText>Hot Jobs</TitleText>
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
