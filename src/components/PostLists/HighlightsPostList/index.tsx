import React, { useState, useEffect } from 'react'
import { Text, View } from 'react-native'
import { getItemAsync } from 'expo-secure-store';

import api from '../../../services/api';
import { PostProxy } from '../../../services/Post/post.proxy';
import PostList from '../PostList';

export default function HighlightsPostLis() {

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

    useEffect(() => {
        loadData()
    }, [])

    return (
        //#region JSX
        <View>
            <Text>Mais Votados</Text>
            <PostList data={data} />
        </View>

        //#endregion
    )
}
