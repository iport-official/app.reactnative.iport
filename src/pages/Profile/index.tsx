import { StackScreenProps } from '@react-navigation/stack';
import React, { useEffect, useRef, useState } from 'react';
import { Animated, Modal, View } from 'react-native';
import { useSelector } from 'react-redux';

import { AntDesign, Feather, MaterialCommunityIcons } from '@expo/vector-icons';

import { setStatusBarStyle } from 'expo-status-bar';

import { ApplicationState } from '../../store';
import { UserProxy } from '../../store/ducks/user/types';

import { ProfileStackParamsList } from '../../navigations/ProfileStack';

import {
    ContactItem,
    ContactTitle,
    ContainerSafeAreaView,
    ContainerKeyboardAvoidView,
    ContentView,
    ModalContainer,
    ModalContent,
    ModalContentItem
} from './styles';

import EditIcon from '../../components/atoms/Buttons/EditIcon';
import MoreButton from '../../components/atoms/Buttons/MoreButton';
import RoundButton from '../../components/atoms/Buttons/RoundButton';
import ActionButton from '../../components/molecules/ActionButton';
// import MainHeader from '../../components/molecules/MainHeader';
import ProfileHightlights from '../../components/molecules/ProfileHighlights';
import ProfileInfo from '../../components/organisms/ProfileInfo';

import ActionButtonContext from '../../contexts/actionButton';
import uuid from 'uuid-random';

type DefaultProfilePageProps = StackScreenProps<
    ProfileStackParamsList,
    'ProfilePage'
>

export default function ProfilePage({ navigation }: DefaultProfilePageProps): JSX.Element {

    const user = useSelector<ApplicationState, UserProxy | null>(state => state.user.user);

    useEffect(() => { setStatusBarStyle("light") }, []);

    const [isActive, setIsActive] = useState(false);
    const [first, setFirst] = useState(0);
    const [liked, setLiked] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [editMode, setEditMode] = useState(false);

    const buttonPosA = 70;
    const buttonPosB = 140;
    const buttonPosC = 210;

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

    const editButton = () => {
        return <MaterialCommunityIcons name="pencil" size={30} color="white" />
    }

    const confirmButton = (): JSX.Element => {
        return <Feather name="check" size={30} color="white" />
    }

    const toggleActionButton = (): void => {
        setIsActive(!isActive);
        setFirst(1);
        if(!isActive) {
            animatePopIn();
        } else {
            animatePopOut();
        }
    }

    const handleLikePress = (): void => {
        setLiked(!liked);
    }

    const handleApplyPress = (): void => {
        toggleActionButton();
        alert('Applied');
    }

    const handleContactsPress = (): void => {
        toggleActionButton();
        setModalVisible(true);
    }

    const handleEditPress = (): void => {
        toggleActionButton();
        setEditMode(true);
    }

    const handleConfirmPress = (): void => {
        toggleActionButton();
        setEditMode(false);
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
    const phones = [
        { id: uuid(), phone: "988776655" },
        { id: uuid(), phone: "988776655" },
        { id: uuid(), phone: "988776655" }];
    const emails = [
        { id: uuid(), email: "michell@gmail.com" },
        { id: uuid(), email: "michell.algarra@gmail.com"},
        { id: uuid(), email: "nest.js@gmail.com" }];

    const isCurrent = true;

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
                        <ModalContentItem
                            isEditMode={editMode}
                            style={{
                                paddingTop: isCurrent ? 5 : 0
                            }} >
                            { editMode
                                ? <EditIcon
                                size={30}
                                iconSize={20}
                                style={{
                                    backgroundColor: '#46266c',
                                    position: 'absolute',
                                    top: -15,
                                    left: '53%'
                                }} />
                                : <View />
                            }
                            { emails.length > 0 || editMode
                                ? <ContactTitle>E-mails</ContactTitle>
                                : <View /> }
                            { emails.map(e => {
                                return <ContactItem key={e.id}>{ e.email }</ContactItem>
                            }) }
                        </ModalContentItem>
                        <ModalContentItem
                            isEditMode={editMode}
                            style={{
                                marginTop: emails.length !== 0 || editMode ? 20 : 0,
                                paddingTop: editMode ? 5 : 0
                            }} >
                            { editMode
                                ? <EditIcon
                                size={30}
                                iconSize={20}
                                style={{
                                    backgroundColor: '#46266c',
                                    position: 'absolute',
                                    top: -15,
                                    left: '53%'
                                }} />
                                : <View />
                            }
                            { phones.length > 0 || editMode
                                ? <ContactTitle>Telefones</ContactTitle>
                                : <View /> }
                            { phones.map(p => {
                                return <ContactItem key={p.id}>{ p.phone }</ContactItem>
                            }) }
                        </ModalContentItem>
                        { emails.length === 0 && phones.length === 0 && !editMode
                            ? <ContactTitle style={{ textAlign: 'center', marginTop: 20 }}
                                >Este usuário não adicionou nenhum contato</ContactTitle>
                            : <View /> }
                    </ModalContent>
                </Modal>
                {/* <MainHeader onPress={() => { navigation.openDrawer() }} /> */}
                <ContentView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }}>
                    <ProfileInfo
                        profileImage={`data:image/gif;base64,${user?.profileImage}`}
                        name={user?.username}
                        status='Atualmente trabalha na empresa iPort Enterprise como Java Backend Developer'
                        isEditMode={editMode}
                        // onStatusChange={(status: string) => {}}
                        // onNameChange={(name: string) => {}}
                        // onImageChange={(image: string) => {}}
                        />
                    <ProfileHightlights
                        role='Estudante de Engenharia de Computação'
                        spotlight='Fluente em Inglês, Espanhol e Francês'
                        email={user?.email}
                        local='Sorocaba - SP'
                        isEditMode={editMode}
                        // onRoleChange={(role: string) => {}}
                        // onSpotlightChange={(spotlight: string) => {}}
                        // onEmailChange={(email: string) => {}}
                        // onLocalChange={(local: string) => {}}
                        onHighlightPress={(highlight: string) =>
                            navigation.navigate('ProfileHighlight', { highlight, isEditMode: editMode, isCurrent })} />
                </ContentView>
                <ActionButtonContext.Provider value={{ isActive }}>
                    <ActionButton
                        onPress={() => toggleActionButton()}
                        icon={moreButtonAnimated}>
                        { first == 0
                            ? <View />
                            : ( !isCurrent
                                ? <View>
                                    <RoundButton
                                        transform={first == 0 ? buttonPosC : animatedPopC }
                                        spin={first == 0 ? '180deg' : spin}
                                        bgColor='#46266c'
                                        icon={checkButton}
                                        onPress={() => handleApplyPress()} />
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
                                : <>
                                    { !editMode
                                        ? <RoundButton
                                            transform={first == 0 ? buttonPosB : animatedPopB}
                                            spin={first == 0 ? '180deg' : spin}
                                            bgColor='#fb9218'
                                            icon={editButton}
                                            onPress={() => handleEditPress()} />
                                        : <RoundButton
                                            transform={first == 0 ? buttonPosB : animatedPopB}
                                            spin={first == 0 ? '180deg' : spin}
                                            bgColor='#03ce17'
                                            icon={confirmButton}
                                            onPress={() => handleConfirmPress()} />
                                    }
                                    <RoundButton
                                        transform={first == 0 ? buttonPosA : animatedPopA}
                                        spin={first == 0 ? '180deg' : spin}
                                        bgColor='#850085'
                                        icon={contactsButton}
                                        onPress={() => handleContactsPress()} />
                                </>
                            )
                        }
                    </ActionButton>
                </ActionButtonContext.Provider>
            </ContainerKeyboardAvoidView>
        </ContainerSafeAreaView>

        //#endregion
    )
}
