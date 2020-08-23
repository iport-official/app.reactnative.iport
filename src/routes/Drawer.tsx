import React from 'react'
import { createDrawerNavigator, DrawerScreenProps } from '@react-navigation/drawer'

import MainPage from '../pages/Main'

export type DrawerParamsList = {
    MainPage: undefined
}

export type DefaultDrawerParamsList = DrawerScreenProps<
    DrawerParamsList,
    "MainPage"
>

const { Navigator, Screen } = createDrawerNavigator<DrawerParamsList>()

export default function Drawer({ navigation }: DefaultDrawerParamsList) {
    return (
        //#region JSX

        <Navigator initialRouteName="MainPage">
            <Screen name="MainPage" component={MainPage} />
        </Navigator>

        //#endregion
    )
}
