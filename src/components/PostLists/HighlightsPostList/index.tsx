import React, { useState, useEffect, useRef } from 'react'
import { FlatList, ViewToken } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import PostItem from '../../PostItem';

import {
    ContainerView,
    TitleText,
    EndFlatListActivityIndicator
} from './styles'

import { ApplicationState } from '../../../store';

import { BaseArrayProxy } from '../../../store/ducks/common/base-array-proxy';
import { HighlightPostProxy, HighlightsPostsTypes } from '../../../store/ducks/highlightsPosts/types';

interface HighlightsPostListProps {
    title: string
}

const HighlightsPostList: React.FC<HighlightsPostListProps> = ({ title }) => {

    const dispatch = useDispatch()
    const highlightsLoading = useSelector<ApplicationState, boolean>(state => state.highlightsPosts.loadingHighlightsPosts)
    const { array } = useSelector<ApplicationState, BaseArrayProxy<HighlightPostProxy>>(state => state.highlightsPosts.highlightsPosts)

    const [page, setPage] = useState(0)

    const handleViewabilityConfig = useRef({ viewAreaCoveragePercentThreshold: 50 })

    const handleOnViewableItemsChanged = useRef((viewableItems: {
        viewableItems: ViewToken[];
        changed: ViewToken[];
    }) => {
        // console.log(viewableItems)
    })

    function loadHighlightsPosts(pageNumber: number = page, shouldStart: boolean = false) {
        dispatch({
            type: HighlightsPostsTypes.LOAD_POSTS_HIGHLIGHTS_REQUEST,
            payload: {
                pageNumber,
                shouldStart
            }
        })
        setPage(pageNumber + 1)
    }

    useEffect(() => { loadHighlightsPosts(0, true) }, [])

    return (
        //#region JSX

        <ContainerView>
            <TitleText>{title}</TitleText>
            <FlatList
                style={{ flexDirection: 'row' }}
                horizontal
                showsHorizontalScrollIndicator={false}
                data={array}
                onEndReached={() => { loadHighlightsPosts() }}
                onEndReachedThreshold={0.1}
                ListFooterComponent={(
                    <EndFlatListActivityIndicator
                        style={{
                            display: highlightsLoading
                                ? 'flex'
                                : 'none'
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
                contentContainerStyle={{ alignItems: "center" }}
            />
        </ContainerView>

        //#endregion
    )
}

export default HighlightsPostList
