import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import ProfilePage from '../pages/Profile';
import ProfileHighlight from '../pages/ProfileHighlight';

export type ProfileStackParamsList = {
    ProfilePage: undefined;
    ProfileHighlight: {
        highlight: string,
        isEditMode: boolean,
        isCurrent: boolean,
        userId?: string
    };
}

const { Navigator, Screen } = createStackNavigator<ProfileStackParamsList>()

export default function ProfileStack(): JSX.Element {
    return (
        //#region JSX

        <NavigationContainer independent >
            <Navigator
                screenOptions={{ headerShown: false }}
                initialRouteName="ProfilePage"
            >
                <Screen name="ProfilePage" component={ProfilePage} />
                <Screen name="ProfileHighlight" component={ProfileHighlight} />
            </Navigator>
        </NavigationContainer>

        //#endregion
    );
}
