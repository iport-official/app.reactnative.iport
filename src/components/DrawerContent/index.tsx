import React from 'react'
import {
    DrawerContentComponentProps,
    DrawerContentOptions,
    DrawerItem
} from '@react-navigation/drawer'
import { StackActions } from '@react-navigation/native';

import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

import ProfilePhoto from '../ProfilePhoto'

import {
    ContainerView,
    ContentDrawerContentScrollView,
    ProfileView,
    ProfileText,
    ContentView,
    FooterView
} from './styles'

import photo from '../../assets/foto_example.png'

const DrawerContent: React.FC<DrawerContentComponentProps<DrawerContentOptions>> = ({navigation, ...props}) => {
    return (
        //#region JSX

        <ContainerView>
            <ContentDrawerContentScrollView {...props} >
                <ProfileView>
                    <ProfilePhoto
                        size={75}
                        source={photo}
                    />
                    <ProfileText>Scarlett Johansson</ProfileText>
                </ProfileView>
                <ContentView>
                    <DrawerItem
                        icon={({ size }) =>
                            <MaterialIcons
                                name="home"
                                size={size}
                                color="#fff"
                            />
                        }
                        label="Início"
                        labelStyle={{ color: "#fff" }}
                        onPress={() => { navigation.navigate("MainPage") }}
                    />
                    <DrawerItem
                        icon={({ size }) =>
                            <MaterialIcons
                                name="person"
                                size={size}
                                color="#fff"
                            />
                        }
                        label="Perfil"
                        labelStyle={{ color: "#fff" }}
                        onPress={() => { navigation.navigate("ProfilePage") }}
                    />
                </ContentView>
            </ContentDrawerContentScrollView>
            <FooterView>
                <DrawerItem
                    icon={({ size }) =>
                        <MaterialIcons
                            name="help"
                            size={size}
                            color="#fff"
                        />
                    }
                    label="Ajuda"
                    labelStyle={{ color: "#fff" }}
                    onPress={() => { }}
                />
                <DrawerItem
                    icon={({ size }) =>
                        <FontAwesome
                            name="sign-out"
                            size={size}
                            color="#fff"
                        />
                    }
                    label="Sair"
                    labelStyle={{ color: "#fff" }}
                    onPress={() => { navigation.dispatch(
                        StackActions.replace('LoginPage')
                    ) }}
                />
            </FooterView>
        </ContainerView>

        //#endregion
    )
}

export default DrawerContent
