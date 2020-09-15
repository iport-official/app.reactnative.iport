import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StackScreenProps } from '@react-navigation/stack';

import MainPage from '../pages/Main';
import ProfilePage from '../pages/Profile';
import DrawerContent from '../components/molecules/DrawerContent';
import { AppStackParamsList } from './AppStack';

import { colors } from '../styles';

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
