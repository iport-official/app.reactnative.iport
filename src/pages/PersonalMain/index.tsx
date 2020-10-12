import { DrawerScreenProps } from '@react-navigation/drawer';
import React, { useEffect, useState } from 'react';

import { getItemAsync } from 'expo-secure-store';

import { PostProxy } from '../../store/ducks/common/post-proxy';

import { DrawerParamsList } from '../../navigations/MainDrawer';

import {
    ContainerSafeAreaView,
    ContainerKeyboardAvoidView,
    JobsScrollView
} from './styles';

import MainHeader from '../../components/molecules/MainHeader';
import PostItem from '../../components/molecules/PostItem';
import CategoryPostList from '../../components/organisms/CategoryPostList';
import HighlightsPostList from '../../components/organisms/HighlightsPostList';
import MainFooter from '../../components/organisms/MainFooter';

import api from '../../services/api';

type DefaultMainPageProps = DrawerScreenProps<
    DrawerParamsList,
    'PersonalMainPage'
>;

export default function PersonalMainPage({ navigation }: DefaultMainPageProps): JSX.Element {
    const [user, setUser] = useState<PostProxy | null>(null);

    useEffect(() => {
        getMainPost();
    }, []);

    async function getMainPost() {
        const token = await getItemAsync('access_token');
        const response = await api.get<PostProxy>('posts/main', {
            headers: {
                Authorization: 'Bearer ' + token
            }
        });
        setUser(response.data);
    }

    return (
        //#region JSX

        <ContainerSafeAreaView>
            <ContainerKeyboardAvoidView>
                <MainHeader
                    onPress={() => {
                        navigation.openDrawer();
                    }}
                />
                <JobsScrollView>
                    {user && (
                        <PostItem
                            showDescription
                            height="300px"
                            width="94.5%"
                            {...user}
                        />
                    )}
                    <HighlightsPostList title="Mais Votados" />
                    <CategoryPostList title="Por Categoria" />
                </JobsScrollView>
                <MainFooter />
            </ContainerKeyboardAvoidView>
        </ContainerSafeAreaView>

        //#endregion
    );
}
