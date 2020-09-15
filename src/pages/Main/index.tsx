import React from 'react';
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
