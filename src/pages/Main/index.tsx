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
import HighlightsPostList from '../../components/organisms/HighlightsPostList';
import CategoryPostList from '../../components/organisms/CategoryPostList';
import PostItem from '../../components/molecules/PostItem';

import { PostProxy } from '../../store/ducks/common/post-proxy';

import api from '../../services/api';
import { getItemAsync } from 'expo-secure-store';

type DefaultMainPageProps = DrawerScreenProps<
    DrawerParamsList,
    "MainPage"
>

export default function MainPage({ navigation }: DefaultMainPageProps) {

    const [user, setUser] = useState<PostProxy | null>(null);

    useEffect(() => { getMainPost() }, []);

    async function getMainPost() {
        const token = await getItemAsync("access_token");
        const response = await api.get<PostProxy>('posts/main', {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
        setUser(response.data);
    }

    return (
        //#region JSX

        <ContainerSafeAreaView>
            <ContainerKeyboardAvoidView>
                <MainHeader onPress={() => { navigation.openDrawer() }} />
                <JobsScrollView>
                    {user && <PostItem
                        showDescription
                        height='300px'
                        width='94.5%'
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
