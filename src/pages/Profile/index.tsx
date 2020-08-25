import React, { useEffect } from 'react'
import { DrawerScreenProps } from '@react-navigation/drawer'

import { DrawerParamsList } from '../MainDrawer'
import MainHeader from '../../components/MainHeader'

import {
    ContainerSafeAreaView,
    ContentView
} from './styles'
import MainFooter from '../../components/MainFooter'
import { setStatusBarStyle } from 'expo-status-bar'

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
