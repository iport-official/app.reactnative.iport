import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"

import AuthSwitch from "./AuthSwitch"
import LoginPage from "../pages/Login"
import SignupPage from "../pages/Signup"
import Drawer, { DrawerParamsList } from "./MainDrawer"
import PostCreationPage from "../pages/PostCreation"

export type AppStackParamsList = {
    PostCreation: undefined
    AuthSwitch: undefined
    LoginPage: undefined
    SignupPage: undefined
    Drawer: DrawerParamsList
}

const { Navigator, Screen } = createStackNavigator<AppStackParamsList>()

export default function AppStack() {
    return (
        //#region JSX

        <NavigationContainer>
            <Navigator
                screenOptions={{ headerShown: false }}
                initialRouteName="PostCreation"
            >
                <Screen name="PostCreation" component={PostCreationPage} />
                <Screen name="AuthSwitch" component={AuthSwitch} />
                <Screen name="LoginPage" component={LoginPage} />
                <Screen name="SignupPage" component={SignupPage} />
                <Screen name="Drawer" component={Drawer} />
            </Navigator>
        </NavigationContainer>

        //#endregion
    );
}
