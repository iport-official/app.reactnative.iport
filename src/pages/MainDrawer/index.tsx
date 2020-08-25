import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

import MainPage from '../Main'
import ProfilePage from '../Profile'

import DrawerContent from '../../components/DrawerContent'
import { StackScreenProps } from '@react-navigation/stack'
import { AppStackParamsList } from '../../routes/AppStack'

export type DrawerParamsList = {
    MainPage: undefined
    ProfilePage: undefined
}

type DefaultLoginPageProps = StackScreenProps<
    AppStackParamsList,
    "Drawer"
>

const { Navigator, Screen } = createDrawerNavigator<DrawerParamsList>()

export default function Drawer({ navigation }: DefaultLoginPageProps) {
    return (
        //#region JSX

        <Navigator
            initialRouteName="MainPage"
            drawerContent={props => (<DrawerContent {...props} />)}
            drawerStyle={{ width: "80%" }}
        >
            <Screen name="MainPage" component={MainPage} />
            <Screen name="ProfilePage" component={ProfilePage} />
        </Navigator>

        //#endregion
    )
}

// DrawerContentComponentProps<DrawerContentOptions>
