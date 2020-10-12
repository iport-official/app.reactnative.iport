import { DrawerScreenProps } from '@react-navigation/drawer';
import React, { useEffect, useState } from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { useSelector } from 'react-redux';

import { Entypo } from '@expo/vector-icons';

import { getItemAsync } from 'expo-secure-store';

import { ApplicationState } from '../../store';
import { BaseArrayProxy } from '../../store/ducks/common/base-array-proxy';
import { PostProxy } from '../../store/ducks/common/post-proxy';
import { UserProxy } from '../../store/ducks/user/types';

import { DrawerParamsList } from '../../navigations/MainDrawer';

import {
    ContainerSafeAreaView,
    ContainerScrollView,
    WarningView,
    WarningText
} from './styles';

import PostList from '../../components/atoms/Views/PostList';
import MainHeader from '../../components/molecules/MainHeader';
import PostItem from '../../components/molecules/PostItem';

import api from '../../services/api';
import { AxiosResponse } from 'axios';

type DefaultCompanyMainPageProps = DrawerScreenProps<
    DrawerParamsList,
    'PersonalMainPage'
>;

export function CompanyMainPage({
    navigation
}: DefaultCompanyMainPageProps): JSX.Element {
    const id = useSelector<ApplicationState, string | undefined>(
        (state) => state.user.user?.id
    );

    const [loading, setLoading] = useState(false);
    const [userPosts, setUserPosts] = useState<BaseArrayProxy<
        PostProxy
    > | null>(null);

    useEffect(() => {
        getMyPosts();
    }, []);

    //#region Functions

    async function getMyPosts(): Promise<void> {
        try {
            setLoading(true);
            const token = await getItemAsync('access_token');
            const response = await api.get<
                unknown,
                AxiosResponse<BaseArrayProxy<PostProxy>>
            >(`users/${id}/posts`, {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            });

            setUserPosts(response.data);
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    }

    function validatePostsArray(): boolean {
        return userPosts !== null && userPosts.length !== 0;
    }

    ////#endregion

    return (
        //#reigon JSX test

        <ContainerSafeAreaView>
            <MainHeader
                onPress={() => {
                    navigation.openDrawer();
                }}
            />
            <ContainerScrollView
                contentContainerStyle={{
                    alignContent: 'center'
                }}
            >
                {validatePostsArray() ? (
                    <PostList
                        loadingPosts={loading}
                        data={userPosts?.array}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => {
                            const { id, ...rest } = item;
                            return <PostItem key={id} id={id} {...rest} />;
                        }}
                    />
                ) : (
                    <WarningView>
                        <TouchableWithoutFeedback
                            onPress={() => {
                                navigation.navigate('PostCreationPage');
                            }}
                        >
                            <Entypo
                                name="circle-with-plus"
                                size={40}
                                color="#A9A9A9"
                            />
                        </TouchableWithoutFeedback>
                        <WarningText>
                            Você ainda não possui posts! Clique no “+” para
                            criar o seu primeiro
                        </WarningText>
                    </WarningView>
                )}
            </ContainerScrollView>
        </ContainerSafeAreaView>

        ////#endregion
    );
}
