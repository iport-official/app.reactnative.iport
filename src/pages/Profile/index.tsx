import React, { useEffect, useRef, useState } from 'react';
import { Animated, View } from 'react-native';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { setStatusBarStyle } from 'expo-status-bar';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import {
    ContainerSafeAreaView,
    ContainerKeyboardAvoidView,
    ContentView
} from './styles';

import { DrawerParamsList } from '../../navigations/MainDrawer';
import MainHeader from '../../components/molecules/MainHeader';
import ProfileInfo from '../../components/organisms/ProfileInfo';
import ProfileHightlights from '../../components/molecules/ProfileHighlights';
import RoundButton from '../../components/atoms/RoundButton';
import ActionButton from '../../components/molecules/ActionButton';
import MoreButton from '../../components/atoms/MoreButton';

import ActionButtonContext from '../../contexts/actionButton';
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


    const [isActive, setIsActive] = useState(false);
    const [first, setFirst] = useState(0);
    const [liked, setLiked] = useState(false);

    const animatedPopA = useRef(new Animated.Value(70)).current;
    const animatedPopB = useRef(new Animated.Value(140)).current;
    const animatedSpin = useRef(new Animated.Value(0)).current;

    const moreButtonAnimated = () => {
        return <MoreButton />
    }

    const likeButton = () => {
        return <AntDesign name="hearto" size={30} color="white" />
    }

    const likeButtonFilled = () => {
        return <AntDesign name="heart" size={30} color="white" />
    }

    const checkButton = () => {
        return <MaterialCommunityIcons name="briefcase-check" size={30} color="white" />
    }

    const toggleActionButton = () => {
        setIsActive(!isActive);
        setFirst(1);
        if(!isActive) {
            animatePopIn();
        } else {
            animatePopOut();
        }
    }

    const handleLikePress = () => {
        toggleActionButton();
        setLiked(!liked);
    }

    const handleApplyPress = () => {
        toggleActionButton();
        alert('Applied');
    }

    const animatePopIn = () => {
        Animated.parallel([
            Animated.timing(animatedPopA, {
                toValue: 0,
                duration: 800,
                useNativeDriver: true
            }),
            Animated.timing(animatedPopB, {
                toValue: 0,
                duration: 800,
                useNativeDriver: true
            }),
            Animated.timing(animatedSpin, {
                toValue: 1,
                duration: 800,
                useNativeDriver: true
            })
        ]).start();
    }

    const animatePopOut = () => {
        Animated.parallel([
            Animated.timing(animatedPopA, {
                toValue: 70,
                duration: 800,
                useNativeDriver: true
            }),
            Animated.timing(animatedPopB, {
                toValue: 140,
                duration: 800,
                useNativeDriver: true
            }),
            Animated.timing(animatedSpin, {
                toValue: 0,
                duration: 800,
                useNativeDriver: true
            })
        ]).start();
    }

    const spin = animatedSpin.interpolate({
        inputRange: [0, 1],
        outputRange: ['180deg', '0deg']
    });

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
                <ActionButtonContext.Provider value={{ isActive }}>
                    <ActionButton
                        onPress={() => toggleActionButton()}
                        icon={moreButtonAnimated}>
                        { first == 0 ? <View /> : <View>
                            <RoundButton
                                transform={first == 0 ? 140 : animatedPopB }
                                spin={first == 0 ? '180deg' : spin}
                                bgColor='#46266c'
                                icon={checkButton}
                                onPress={() => handleApplyPress()}  />
                            <RoundButton
                                transform={first == 0 ? 70 : animatedPopA}
                                spin={first == 0 ? '180deg' : spin}
                                bgColor='#cc4195'
                                icon={liked ? likeButtonFilled : likeButton}
                                onPress={() => handleLikePress()} />
                            </View>
                        }
                    </ActionButton>
                </ActionButtonContext.Provider>
            </ContainerKeyboardAvoidView>
        </ContainerSafeAreaView>

        //#endregion
    )
}
