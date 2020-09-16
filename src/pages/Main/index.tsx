import React, { useEffect, useState } from 'react';
import { DrawerScreenProps } from '@react-navigation/drawer';

import {
    ContainerSafeAreaView,
    ContainerKeyboardAvoidView,
    JobsScrollView
} from './styles';

import { DrawerParamsList } from '../../navigations/MainDrawer';
import MainHeader from '../../components/molecules/MainHeader';
import MainFooter from '../../components/organisms/MainFooter';
import HighlightsPostList from '../../components/organisms/PostLists/HighlightsPostList';
import CategoryPostList from '../../components/organisms/PostLists/CategoryPostList';
import PostItem from '../../components/molecules/PostItem';

import { PostProxy } from '../../store/ducks/common/post-proxy';

import api from '../../services/api';
import { getItemAsync } from 'expo-secure-store';

type DefaultMainPageProps = DrawerScreenProps<
    DrawerParamsList,
    "MainPage"
>

export default function MainPage({ navigation }: DefaultMainPageProps) {

    const [user, setUser] = useState<PostProxy | null>(null)

    useEffect(() => { getMainPost() }, [])

    async function getMainPost() {
        const token = await getItemAsync("access_token")
        const response = await api.get<PostProxy>('posts/main',{
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
        setUser(response.data)
    }

    return (
        //#region JSX

        <ContainerSafeAreaView>
            <ContainerKeyboardAvoidView>
                <JobsScrollView>
                    <MainHeader onPress={() => { navigation.openDrawer() }} />
                    {user && <PostItem
                        showDescription
                        height='375px'
                        width='95%'
                        {...user}
                    />}
                    <HighlightsPostList
                        title="Mais Votados"
                    />
                    <CategoryPostList
                        title="Por Categoria"
                    />
                </JobsScrollView>
                <MainFooter />
            </ContainerKeyboardAvoidView>
        </ContainerSafeAreaView>

        //#endregion
    )
}
