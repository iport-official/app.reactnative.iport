import React, { useEffect, useRef, useState } from 'react';
import { Animated, Modal, Text, View } from 'react-native';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { setStatusBarStyle } from 'expo-status-bar';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import {
    ContactItem,
    ContactTitle,
    ContainerSafeAreaView,
    ContainerKeyboardAvoidView,
    ContentView,
    ModalContainer,
    ModalContent
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
    const [modalVisible, setModalVisible] = useState(false);

    const buttonPosA: number = 70;
    const buttonPosB: number = 140;
    const buttonPosC: number = 210;

    const animatedPopA = useRef(new Animated.Value(buttonPosA)).current;
    const animatedPopB = useRef(new Animated.Value(buttonPosB)).current;
    const animatedPopC = useRef(new Animated.Value(buttonPosC)).current;
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

    const contactsButton = () => {
        return <MaterialCommunityIcons name="phone" size={30} color="white" />
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
        setLiked(!liked);
    }

    const handleApplyPress = () => {
        toggleActionButton();
        alert('Applied');
    }

    const handleContactsPress = () => {
        toggleActionButton();
        setModalVisible(true);
    }

    const animatePopIn = () => {
        Animated.parallel([
            Animated.timing(animatedPopA, {
                toValue: 0,
                duration: 400,
                useNativeDriver: true
            }),
            Animated.timing(animatedPopB, {
                toValue: 0,
                duration: 400,
                useNativeDriver: true
            }),
            Animated.timing(animatedPopC, {
                toValue: 0,
                duration: 400,
                useNativeDriver: true
            }),
            Animated.timing(animatedSpin, {
                toValue: 1,
                duration: 400,
                useNativeDriver: true
            })
        ]).start();
    }

    const animatePopOut = () => {
        Animated.parallel([
            Animated.timing(animatedPopA, {
                toValue: buttonPosA,
                duration: 400,
                useNativeDriver: true
            }),
            Animated.timing(animatedPopB, {
                toValue: buttonPosB,
                duration: 400,
                useNativeDriver: true
            }),
            Animated.timing(animatedPopC, {
                toValue: buttonPosC,
                duration: 400,
                useNativeDriver: true
            }),
            Animated.timing(animatedSpin, {
                toValue: 0,
                duration: 400,
                useNativeDriver: true
            })
        ]).start();
    }

    const spin = animatedSpin.interpolate({
        inputRange: [0, 1],
        outputRange: ['180deg', '0deg']
    });

    // TODO - remove template arrays
    const phones: String[] = ["988776655", "988776655", "988776655"];
    const emails: String[] = ["michell@gmail.com", "michell.algarra@gmail.com", "nest.js@gmail.com"];

    return (
        //#region JSX

        <ContainerSafeAreaView>
            <ContainerKeyboardAvoidView>
                <Modal
                    animationType='fade'
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => setModalVisible(false)} >
                    <ModalContainer
                        onPress={() => setModalVisible(false)}
                        activeOpacity={1} />
                    <ModalContent>
                        { emails.length > 0 ? <ContactTitle>E-mails</ContactTitle> : <View /> }
                        { emails.map(e => {
                            return <ContactItem>{ e }</ContactItem>
                        }) }
                        { phones.length > 0 ? <ContactTitle style={{ marginTop: 20 }}>Telefones</ContactTitle> : <View /> }
                        { phones.map(p => {
                            return <ContactItem>{ p }</ContactItem>
                        }) }
                        { emails.length === 0 && phones.length === 0
                            ? <ContactTitle style={{ textAlign: 'center', marginTop: 20 }}
                                >Este usuário não adicionou nenhum contato adicional</ContactTitle>
                            : <View /> }
                    </ModalContent>
                </Modal>
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
                                transform={first == 0 ? buttonPosC : animatedPopC }
                                spin={first == 0 ? '180deg' : spin}
                                bgColor='#46266c'
                                icon={checkButton}
                                onPress={() => handleApplyPress()}  />
                            <RoundButton
                                transform={first == 0 ? buttonPosB : animatedPopB}
                                spin={first == 0 ? '180deg' : spin}
                                bgColor='#cc4195'
                                icon={liked ? likeButtonFilled : likeButton}
                                onPress={() => handleLikePress()} />
                            <RoundButton
                                transform={first == 0 ? buttonPosA : animatedPopA}
                                spin={first == 0 ? '180deg' : spin}
                                bgColor='#850085'
                                icon={contactsButton}
                                onPress={() => handleContactsPress()} />
                            </View>
                        }
                    </ActionButton>
                </ActionButtonContext.Provider>
            </ContainerKeyboardAvoidView>
        </ContainerSafeAreaView>

        //#endregion
    )
}
