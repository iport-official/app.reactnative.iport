import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import React from "react"

import AuthSwitch from "./AuthSwitch"
import Drawer, { DrawerParamsList } from "./MainDrawer"

export type AppStackParamsList = {
    PostCreation: undefined
    AuthSwitch: undefined
    Drawer: DrawerParamsList
}

const { Navigator, Screen } = createStackNavigator<AppStackParamsList>()

export default function AppStack(): JSX.Element {
    return (
        //#region JSX

        <NavigationContainer>
            <Navigator
                screenOptions={{ headerShown: false }}
                initialRouteName="AuthSwitch"
            >
                <Screen name="AuthSwitch" component={AuthSwitch} />
                <Screen name="Drawer" component={Drawer} />
            </Navigator>
        </NavigationContainer>

        //#endregion
    );
}
