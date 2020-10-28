import { DrawerScreenProps } from '@react-navigation/drawer';
import React, { useEffect, useState } from 'react';

import { getItemAsync } from 'expo-secure-store';

import { BaseArrayProxy } from '../../store/ducks/common/base-array-proxy';
import { PostProxy } from '../../store/ducks/common/post-proxy';

import { DrawerParamsList } from '../../navigations/MainDrawer';

import {
    ContainerSafeAreaView,
    ContainerKeyboardAvoidView,
    JobsScrollView
} from './styles';

import PostList from '../../components/atoms/Views/PostList';
import MainHeader from '../../components/molecules/MainHeader';
import PostItem from '../../components/molecules/PostItem';
import { PostDetailsPayload } from '../../components/molecules/PostItem';
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
    const [searchText, setSearchText] = useState('');
    const [isSearching, setIsSearching] = useState(false);
    const [searchingPosts, setSearchingPosts] = useState<PostProxy[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getMainPost();
    }, []);

    useEffect(() => {
        if(searchText.length === 0) setIsSearching(false);
    }, [searchText]);

    async function getMainPost() {
        const token = await getItemAsync('access_token');
        const response = await api.get<PostProxy>('posts/main', {
            headers: {
                Authorization: 'Bearer ' + token
            }
        });
        setUser(response.data);
    }

    const searchPosts = async (text: string) => {
        if(searchText.length > 0) {
            try {
                setIsSearching(true);
                setLoading(true);
                const token = await getItemAsync('access_token');
                const response = await api.get<BaseArrayProxy<PostProxy>>
                    (
                        `posts?search=${text.split(' ').join('+')}`,
                        {
                            headers: {
                                Authorization: 'Bearer ' + token
                            }
                        }
                    )
                setSearchingPosts(response.data.array);
                setLoading(false);
            } catch(error) {
                alert(error);
            }
        }
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
                    { !isSearching
                        ? <>
                            {user && (
                                <PostItem
                                    showDescription
                                    postPressed={(postDetails: PostDetailsPayload) => navigation.navigate('PostDetails', { postDetails })}
                                    height="300px"
                                    width="94.5%"
                                    {...user}
                                />
                            )}
                            <HighlightsPostList
                                title="Mais Votados"
                                postPressed={(postDetails: PostDetailsPayload) => navigation.navigate('PostDetails', { postDetails })} />
                            <CategoryPostList title="Por Categoria" />
                        </>
                        : <PostList
                        loadingPosts={loading}
                        data={searchingPosts}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => {
                            const { id, ...rest } = item;
                            return (
                                <PostItem
                                marginTop={20}
                                key={id}
                                id={id}
                                {...rest} />
                                )
                            }}
                    /> }
                </JobsScrollView>
                <MainFooter onTextChange={setSearchText} search={() => searchPosts(searchText)}/>
            </ContainerKeyboardAvoidView>
        </ContainerSafeAreaView>

        //#endregion
    );
}
