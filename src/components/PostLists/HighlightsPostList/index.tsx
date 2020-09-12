import React, {
    useState,
    useEffect,
    useRef
} from 'react'
import { ViewToken } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import PostItem from '../../PostItem';

import {
    ContainerView,
    TitleText,
    EndFlatListActivityIndicator,
    PostFlatList
} from './styles'

import { ApplicationState } from '../../../store';
import { PostProxy, PostsTypes } from '../../../store/ducks/posts/types';

import { BaseArrayProxy } from '../../../services/base-array-proxy';

interface HighlightsPostListProps {
    title: string
}

const HighlightsPostList: React.FC<HighlightsPostListProps> = ({ title }) => {

    const dispatch = useDispatch()
    const highlightsLoading = useSelector<ApplicationState, boolean>(state => state.posts.loadingHighlights)
    const highlights = useSelector<ApplicationState, BaseArrayProxy<PostProxy>>(state => state.posts.highlights)

    const [page, setPage] = useState<number>(0)

    const handleViewabilityConfig = useRef({ viewAreaCoveragePercentThreshold: 50 })

    const handleOnViewableItemsChanged = useRef((viewableItems: {
        viewableItems: ViewToken[];
        changed: ViewToken[];
    }) => {
        // console.log(viewableItems)
    })

    function loadData(pageNumber: number = page, shouldStart: boolean = false) {
        dispatch({
            type: PostsTypes.LOAD_POSTS_HIGHLIGHTS_REQUEST,
            payload: {
                pageNumber,
                shouldStart
            }
        })
        setPage(pageNumber + 1)
    }

    useEffect(() => { loadData(0, true) }, [])

    return (
        //#region JSX

        <ContainerView>
            <TitleText>{title}</TitleText>
            <PostFlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={highlights.array}
                onEndReached={() => { loadData() }}
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
                contentContainerStyle={{
                    alignItems: "center"
                }}
            />
        </ContainerView>

        //#endregion
    )
}

export default HighlightsPostList

//#region Old code

/*
setLoading(true)
const token = await getItemAsync('access_token')
const response = await api.get<BaseArrayProxy<PostProxy>>(`posts/highlights?page=${pageNumber}`, {
    headers: {
        Authorization: 'Bearer ' + token
    }
})
setData([
    ...data,
    ...response.data.array
])
setPage(pageNumber + 1)
setLoading(false)
*/

//#endregion
