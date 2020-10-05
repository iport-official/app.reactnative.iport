import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"

import AuthSwitch from "./AuthSwitch"
import Drawer, { DrawerParamsList } from "./MainDrawer"
import PostCreationPage from "../pages/PostCreation"

export type AppStackParamsList = {
    PostCreation: undefined
    AuthSwitch: undefined
    Drawer: DrawerParamsList
}

const { Navigator, Screen } = createStackNavigator<AppStackParamsList>()

export default function AppStack() {
    return (
        //#region JSX

        <NavigationContainer>
            <Navigator
                screenOptions={{ headerShown: false }}
                initialRouteName="AuthSwitch"
            >
                <Screen name="PostCreation" component={PostCreationPage} />
                <Screen name="AuthSwitch" component={AuthSwitch} />
                <Screen name="Drawer" component={Drawer} />
            </Navigator>
        </NavigationContainer>

        //#endregion
    );
}
