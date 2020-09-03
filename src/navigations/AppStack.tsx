import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import LoginPage from '../pages/Login'
import Drawer, { DrawerParamsList } from './MainDrawer'

export type AppStackParamsList = {
    LoginPage: undefined
    Drawer: DrawerParamsList
}

const { Navigator, Screen } = createStackNavigator<AppStackParamsList>()

export default function AppStack() {
    return (
        //#region JSX

        <NavigationContainer>
            <Navigator
                screenOptions={{ headerShown: false }}
                initialRouteName="Drawer"
            >
                <Screen name="LoginPage" component={LoginPage} />
                <Screen name="Drawer" component={Drawer} />
            </Navigator>
        </NavigationContainer>

        //#endregion
    )
}
