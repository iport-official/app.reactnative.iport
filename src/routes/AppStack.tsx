import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import LoginPage from '../pages/Login'
import MainPage from '../pages/Main'

export type AppStackParamsList = {
    LoginPage: undefined
    MainPage: undefined
}

const { Navigator, Screen } = createStackNavigator<AppStackParamsList>()

export default function AppStack() {
    return (
        <NavigationContainer>
            <Navigator
                screenOptions={{headerShown: false}}
                initialRouteName="LoginPage"
            >
                <Screen name="LoginPage" component={LoginPage} />
                <Screen name="MainPage" component={MainPage} />
            </Navigator>
        </NavigationContainer>
    )
}
