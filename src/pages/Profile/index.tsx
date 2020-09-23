import React, { useEffect } from 'react';
import { Text } from 'react-native';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { setStatusBarStyle } from 'expo-status-bar';

import {
    ContainerSafeAreaView,
    ContainerKeyboardAvoidView,
    ContentView
} from './styles';

import { DrawerParamsList } from '../../navigations/MainDrawer';
import MainHeader from '../../components/molecules/MainHeader';
import MainFooter from '../../components/organisms/MainFooter';
import ProfileInfo from '../../components/organisms/ProfileInfo';
import { useSelector } from 'react-redux';
import { ApplicationState } from '../../store';
import { UserProxy } from '../../store/ducks/user/types';

const profileImage = require('../../assets/foto_example.png');

type DefaultMainPageProps = DrawerScreenProps<
    DrawerParamsList,
    "ProfilePage"
>

export default function ProfilePage({ navigation }: DefaultMainPageProps) {

    const user = useSelector<ApplicationState, UserProxy | null>(state => state.user.user);

    useEffect(() => { setStatusBarStyle("light") }, [])

    return (
        //#region JSX

        <ContainerSafeAreaView>
            <ContainerKeyboardAvoidView>
                <MainHeader onPress={() => { navigation.openDrawer() }} />
                <ContentView>
                    <ProfileInfo
                        profileImage={`data:image/gif;base64,${user?.profileImage}`}
                        name={user?.username}
                        role='Estudante de Engenharia de Computação'
                        spotlight='Fluente em Inglês, Espanhol e Francês'
                        status='Atualmente trabalha na empresa iPort Enterprise como Java Backend Developer'
                        local='Sorocaba - SP'
                        recomendations={2270982} />
                </ContentView>
                <MainFooter />
            </ContainerKeyboardAvoidView>
        </ContainerSafeAreaView>

        //#endregion
    )
}
