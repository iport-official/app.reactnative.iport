import React from 'react';
import { DrawerScreenProps } from '@react-navigation/drawer';

import { DrawerParamsList } from '../../navigations/MainDrawer';
import PostList from '../../components/PostList';
import MainHeader from '../../components/MainHeader';
import MainFooter from '../../components/MainFooter';

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
                    <PostList
                        category='Informatica'
                    />
                </JobsScrollView>
                <MainFooter />
            </ContainerKeyboardAvoidView>
        </ContainerSafeAreaView>

        //#endregion
    )
}
