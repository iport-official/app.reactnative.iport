import React from 'react';
import { DrawerScreenProps } from '@react-navigation/drawer';

import { DrawerParamsList } from '../../navigations/MainDrawer';
import MainHeader from '../../components/MainHeader';
import MainFooter from '../../components/MainFooter';

import {
    ContainerSafeAreaView,
    ContainerKeyboardAvoidView,
    JobsScrollView
} from './styles'
import HighlightsPostList from '../../components/PostLists/HighlightsPostList';
import CategoryPostList from '../../components/PostLists/CategoryPostList';

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
