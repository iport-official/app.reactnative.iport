import React, {
    useState,
    useEffect,
    useRef
} from 'react'
import { ViewToken } from 'react-native';
import { getItemAsync } from 'expo-secure-store';

import PostItem from '../../PostItem';

import {
    ContainerView,
    TitleText,
    EndFlatListActivityIndicator,
    PostFlatList
} from './styles'

import { PostProxy } from '../../../services/Post/post.proxy';

import api from '../../../services/api';

interface HighlightsPostListProps {
    title: string
}

const HighlightsPostList: React.FC<HighlightsPostListProps> = ({ title }) => {
    const [page, setPage] = useState<number>(0)
    const [loading, setLoading] = useState<boolean>(false)
    const [data, setData] = useState<PostProxy[]>([])

    const handleViewabilityConfig = useRef({ viewAreaCoveragePercentThreshold: 50 })

    const handleOnViewableItemsChanged = useRef((viewableItems: {
        viewableItems: ViewToken[];
        changed: ViewToken[];
    }) => {
        // console.log(viewableItems)
    })

    async function loadData(pageNumber: number = page) {
        setLoading(true)
        const token = await getItemAsync('access_token')
        const response = await api.get<PostProxy[]>(`posts/highlights?page=${pageNumber}`, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
        setData([
            ...data,
            ...response.data
        ])
        setPage(pageNumber + 1)
        setLoading(false)
    }

    useEffect(() => { loadData() }, [])

    return (
        //#region JSX

        <ContainerView>
            <TitleText>{title}</TitleText>
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

export default HighlightsPostList
