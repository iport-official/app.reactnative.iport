import React from 'react';
import { DrawerScreenProps } from '@react-navigation/drawer';

import { DrawerParamsList } from '../../navigations';
import PostList from '../../components/PostList';
import MainHeader from '../../components/MainHeader';
import MainFooter from '../../components/MainFooter';
import CategoryList from '../../components/CategoryList';
import PostItem from '../../components/PostItem';

import profilePhoto01 from '../../assets/foto_example.png'
import profilePhoto02 from '../../assets/photo02.jpg'
import profilePhoto03 from '../../assets/netflix.jpg'
import profilePhoto04 from '../../assets/henrique.jpg'

import backgroundPhoto01 from '../../assets/image01.jpg'
import backgroundPhoto02 from '../../assets/image02.png'
import backgroundPhoto03 from '../../assets/madmax.jpg'
import backgroundPhoto04 from '../../assets/image04.jpg'

import {
    ContainerSafeAreaView,
    ContainerKeyboardAvoidView,
    JobsScrollView
} from './styles'

type DefaultMainPageProps = DrawerScreenProps<
    DrawerParamsList,
    "MainPage"
>

export default function MainPage({ navigation }: DefaultMainPageProps) {
    return (
        //#region JSX

        <ContainerSafeAreaView>
            <ContainerKeyboardAvoidView>
                <MainHeader onPress={() => { navigation.openDrawer() }} />
                <JobsScrollView>
                    {/* <MainPost /> */}
                    <PostItem
                        id="0"
                        isMain
                        imageSource={backgroundPhoto04}
                        profileImageSource={profilePhoto04}
                        profile="Henrique César"
                        title="Henrique César está chamando todos para o Vale do Silício"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        publishingDate="5 minutes ago"
                        coinsAmount={1300}
                    />
                    <CategoryList
                        categories={[
                            {
                                id: '0',
                                name: 'Engenharia'
                            },
                            {
                                id: '1',
                                name: 'TI e derivados'
                            },
                            {
                                id: '2',
                                name: 'Arquitetura'
                            },
                            {
                                id: '3',
                                name: 'Medicina'
                            },
                            {
                                id: '4',
                                name: 'Tecnologia'
                            },
                            {
                                id: '5',
                                name: 'Outros'
                            }
                        ]}
                    />
                    <PostList
                        title='Vagas Recentes'
                        data={[
                            {
                                id: '0',
                                imageSource: backgroundPhoto01,
                                profileImageSource: profilePhoto01,
                                profile: 'Scarlett Johansson',
                                title: 'Scarlett Johansson is hiring programmers right now',
                                publishingDate: '3 hours ago',
                                coinsAmount: 1300
                            },
                            {
                                id: '1',
                                imageSource: backgroundPhoto02,
                                profileImageSource: profilePhoto02,
                                profile: 'Erick Escagion',
                                title: 'Erick Escagion have created a new tech',
                                publishingDate: '2 weeks ago',
                                coinsAmount: 0
                            },
                            {
                                id: '2',
                                imageSource: backgroundPhoto03,
                                profileImageSource: profilePhoto03,
                                profile: 'Netflix',
                                title: 'Netflix is sharing new movies...',
                                publishingDate: '1 year ago',
                                coinsAmount: 12560
                            }
                        ]}
                    />
                    <PostList
                        title='Tecnologia'
                        data={[
                            {
                                id: '0',
                                imageSource: backgroundPhoto01,
                                profileImageSource: profilePhoto01,
                                profile: 'Scarlett Johansson',
                                title: 'Scarlett Johansson is hiring programmers right now',
                                publishingDate: '3 hours ago',
                                coinsAmount: 1300
                            },
                            {
                                id: '1',
                                imageSource: backgroundPhoto02,
                                profileImageSource: profilePhoto02,
                                profile: 'Erick Escagion',
                                title: 'Erick Escagion have created a new tech',
                                publishingDate: '2 weeks ago',
                                coinsAmount: 0
                            },
                            {
                                id: '2',
                                imageSource: backgroundPhoto03,
                                profileImageSource: profilePhoto03,
                                profile: 'Netflix',
                                title: 'Netflix is sharing new movies...',
                                publishingDate: '1 year ago',
                                coinsAmount: 12560
                            }
                        ]}
                    />
                </JobsScrollView>

                <MainFooter />
            </ContainerKeyboardAvoidView>
        </ContainerSafeAreaView>

        //#endregion
    )
}
