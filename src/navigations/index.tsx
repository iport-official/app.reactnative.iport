import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import MainPage from '../pages/Main';
import ProfilePage from '../pages/Profile';
import { colors } from '../styles';

import DrawerContent from '../components/DrawerContent';
import { StackScreenProps } from '@react-navigation/stack';
import { AppStackParamsList } from './AppStack';

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
            drawerStyle={{ width: "80%", backgroundColor: colors.vividPurple + 'dd' }}>
                <Screen name="MainPage" component={MainPage} />
                <Screen name="ProfilePage" component={ProfilePage} />
        </Navigator>

        //#endregion
    )
}
