import React, { useState, useEffect } from 'react'
import { getItemAsync } from 'expo-secure-store';

import PostList from '../PostList';

import {
    ContainerView,
    TitleText
} from './styles'

import api from '../../../services/api';
import { PostProxy } from '../../../services/Post/post.proxy';

interface HighlightsPostListProps {
    title: string
}

const HighlightsPostList: React.FC<HighlightsPostListProps> = ({ title }) => {

    const [page, setPage] = useState(0)
    const [data, setData] = useState<PostProxy[]>([])

    async function loadData(pageNumber: number = page) {
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
    }

    useEffect(() => { loadData() }, [])

    return (
        //#region JSX

        <ContainerView>
            <TitleText>{title}</TitleText>
            <PostList
                data={data}
                onEndReached={loadData}
                onEndReachedThreshold={0.1}
            />
        </ContainerView>

        //#endregion
    )
}

export default HighlightsPostList
