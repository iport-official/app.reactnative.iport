import React, { useEffect } from 'react';
import { DrawerScreenProps } from '@react-navigation/drawer';

import { DrawerParamsList } from '../MainDrawer';
import PostList from '../../components/PostList';
import MainHeader from '../../components/MainHeader';
import MainFooter from '../../components/MainFooter';
import CategoryList from '../../components/CategoryList';

import profilePhoto from '../../assets/foto_example.png'
import photo02 from '../../assets/photo02.jpg'
import photo3 from '../../assets/netflix.jpg'

import backgroundPhoto01 from '../../assets/image01.jpg'
import backgroundPhoto02 from '../../assets/image02.png'
import backgroundPhoto03 from '../../assets/madmax.jpg'

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

    useEffect(() => {
    }, []);

    return (
        //#region JSX

        <ContainerSafeAreaView>
            <ContainerKeyboardAvoidView>
                <MainHeader onPress={() => { navigation.openDrawer() }} />
                <JobsScrollView>
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
                                name: 'Medicina'
                            },
                            {
                                id: '5',
                                name: 'Outros'
                            }
                        ]}
                    />
                    <PostList
                        data={[
                            {
                                id: '0',
                                imageSource: backgroundPhoto01,
                                profileImageSource: profilePhoto,
                                profile: 'Scarlett Johansson',
                                title: 'Scarlett Johansson is hiring programmers right now',
                                publishingDate: '3 hours ago',
                                coinsAmount: 1300
                            },
                            {
                                id: '1',
                                imageSource: backgroundPhoto02,
                                profileImageSource: photo02,
                                profile: 'Erick Escagion',
                                title: 'Erick Escagion have created a new tech',
                                publishingDate: '2 weeks ago',
                                coinsAmount: 0
                            },
                            {
                                id: '2',
                                imageSource: backgroundPhoto03,
                                profileImageSource: photo3,
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
