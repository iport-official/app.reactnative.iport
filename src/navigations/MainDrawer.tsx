import { createDrawerNavigator } from '@react-navigation/drawer';
import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { useSelector } from 'react-redux';

import { ApplicationState } from '../store';
import { AccountType, UserProxy } from '../store/ducks/user/types';

import { colors } from '../styles';

import DrawerContent from '../components/molecules/DrawerContent';

import { CompanyMainPage } from '../pages/CompanyMain';
import PersonalMainPage from '../pages/PersonalMain';
import PostCreationPage from '../pages/PostCreation';
import { AppStackParamsList } from './AppStack';
import ProfileStack from './ProfileStack';

export type DrawerParamsList = {
    CompanyMainPage: undefined
    PersonalMainPage: undefined;
    ProfileStack: undefined;
    PostCreationPage: undefined;
};

type DefaultLoginPageProps = StackScreenProps<AppStackParamsList, 'Drawer'>;

const { Navigator, Screen } = createDrawerNavigator<DrawerParamsList>();

export default function Drawer({ navigation }: DefaultLoginPageProps) {
    const accountType = useSelector<ApplicationState, AccountType | undefined>(
        (state) => state.user.user?.accountType
    );

    return (
        //#region JSX

        <Navigator
            initialRouteName="PersonalMainPage"
            drawerContent={(props) => <DrawerContent {...props} />}
            drawerStyle={{
                width: '80%',
                backgroundColor: colors.vividPurple + 'dd'
            }}
        >
            {accountType === AccountType.PERSONAL ? (
                <Screen name="PersonalMainPage" component={PersonalMainPage} />
            ) : (
                <Screen name="CompanyMainPage" component={CompanyMainPage}/>
            )}
            <Screen name="PostCreationPage" component={PostCreationPage} />
            <Screen name="ProfileStack" component={ProfileStack} />
        </Navigator>

        //#endregion
    );
}
