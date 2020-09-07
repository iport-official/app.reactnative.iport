import React, { useState, useEffect } from 'react'
import { View } from 'react-native'
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

    const [data, setData] = useState<PostProxy[]>([])

    async function loadData() {
        const token = await getItemAsync('access_token')
        const response = await api.get<PostProxy[]>(`posts/highlights?page=0`, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
        setData(response.data)
    }

    useEffect(() => { loadData() }, [])

    return (
        //#region JSX

        <ContainerView>
            <TitleText>{title}</TitleText>
            <PostList data={data} />
        </ContainerView>

        //#endregion
    )
}

export default HighlightsPostList
