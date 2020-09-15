import React, { useEffect } from 'react';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { setStatusBarStyle } from 'expo-status-bar';

import {
    ContainerSafeAreaView,
    ContentView
} from './styles';

import { DrawerParamsList } from '../../navigations/MainDrawer';
import MainHeader from '../../components/molecules/MainHeader';
import MainFooter from '../../components/organisms/MainFooter';

type DefaultMainPageProps = DrawerScreenProps<
    DrawerParamsList,
    "ProfilePage"
>

export default function ProfilePage({ navigation }: DefaultMainPageProps) {

    useEffect(() => { setStatusBarStyle("light") }, [])

    return (
        //#region JSX

        <ContainerSafeAreaView>
            <MainHeader onPress={() => { navigation.openDrawer() }} />
            <ContentView />
            <MainFooter />
        </ContainerSafeAreaView>

        //#endregion
    )
}
