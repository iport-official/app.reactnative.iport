import { createDrawerNavigator } from '@react-navigation/drawer';
import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { useSelector } from 'react-redux';

import { ApplicationState } from '../store';
import { AccountType } from '../store/ducks/user/types';
import { UpdatePostPayload } from '../store/highlightPostTemp';

import { colors } from '../styles';

import DrawerContent from '../components/molecules/DrawerContent';
import { PostDetailsPayload } from '../components/molecules/PostItem';

import { CompanyMainPage } from '../pages/CompanyMain';
import PersonalMainPage from '../pages/PersonalMain';
import PostCreationPage from '../pages/PostCreation';
import PostDetails from '../pages/PostDetails';
import { AppStackParamsList } from './AppStack';
import ProfileStack from './ProfileStack';

export type DrawerParamsList = {
    CompanyMainPage: undefined;
    PersonalMainPage: undefined;
    ProfileStack: undefined;
    PostCreationPage: {
        id?: string | null;
        post?: UpdatePostPayload;
    };
    PostDetails: {
        postDetails: PostDetailsPayload | undefined
    }
};

type DefaultLoginPageProps = StackScreenProps<AppStackParamsList, 'Drawer'>;

const { Navigator, Screen } = createDrawerNavigator<DrawerParamsList>();

export default function Drawer({ navigation }: DefaultLoginPageProps): JSX.Element {
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
            <Screen name="PostDetails" component={PostDetails} />
        </Navigator>

        //#endregion
    );
}
