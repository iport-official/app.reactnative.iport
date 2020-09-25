import React, { useEffect } from 'react';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { setStatusBarStyle } from 'expo-status-bar';
import { Feather } from '@expo/vector-icons';

import {
    ContainerSafeAreaView,
    ContainerKeyboardAvoidView,
    ContentView
} from './styles';

import { DrawerParamsList } from '../../navigations/MainDrawer';
import MainHeader from '../../components/molecules/MainHeader';
import RoundButton from '../../components/atoms/RoundButton';
import ProfileInfo from '../../components/organisms/ProfileInfo';
import ProfileHightlights from '../../components/molecules/ProfileHighlights';

import { useSelector } from 'react-redux';
import { ApplicationState } from '../../store';
import { UserProxy } from '../../store/ducks/user/types';

type DefaultMainPageProps = DrawerScreenProps<
    DrawerParamsList,
    "ProfilePage"
>

export default function ProfilePage({ navigation }: DefaultMainPageProps) {

    const user = useSelector<ApplicationState, UserProxy | null>(state => state.user.user);

    useEffect(() => { setStatusBarStyle("light") }, []);

    const moreButton = () => {
        return <Feather name="more-horizontal" size={34} color="white" />
    }

    const handleButtonPress = () => {
        alert('hey');
    }

    return (
        //#region JSX

        <ContainerSafeAreaView>
            <ContainerKeyboardAvoidView>
                <MainHeader onPress={() => { navigation.openDrawer() }} />
                <ContentView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }}>
                    <ProfileInfo
                        profileImage={`data:image/gif;base64,${user?.profileImage}`}
                        name={user?.username}
                        status='Atualmente trabalha na empresa iPort Enterprise como Java Backend Developer' />
                    <ProfileHightlights
                        email={user?.email}
                        role='Estudante de Engenharia de Computação'
                        spotlight='Fluente em Inglês, Espanhol e Francês'
                        local='Sorocaba - SP' />
                </ContentView>
                <RoundButton
                    onPress={() => handleButtonPress()}
                    icon={moreButton} />
            </ContainerKeyboardAvoidView>
        </ContainerSafeAreaView>

        //#endregion
    )
}
