import React from 'react'
import {
    DrawerContentComponentProps,
    DrawerContentOptions,
    DrawerItem
} from '@react-navigation/drawer'

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

const DrawerContent: React.FC<DrawerContentComponentProps<DrawerContentOptions>> = (props) => {
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
                        icon={({ color, size }) =>
                            <MaterialIcons
                                name="home"
                                size={size}
                                color={color}
                            />
                        }
                        label="Início"
                        onPress={() => { }}
                    />
                    <DrawerItem
                        icon={({ color, size }) =>
                            <MaterialIcons
                                name="person"
                                size={size}
                                color={color}
                            />
                        }
                        label="Perfil"
                        onPress={() => { }}
                    />
                    <DrawerItem
                        icon={({ color, size }) =>
                            <MaterialIcons
                                name="settings"
                                size={size}
                                color={color}
                            />
                        }
                        label="Configurações"
                        onPress={() => { }}
                    />
                    <DrawerItem
                        icon={({ color, size }) =>
                            <MaterialIcons
                                name="help"
                                size={size}
                                color={color}
                            />
                        }
                        label="Ajuda"
                        onPress={() => { }}
                    />
                </ContentView>
            </ContentDrawerContentScrollView>
            <FooterView>
                <DrawerItem
                    icon={({ color, size }) =>
                        <FontAwesome
                            name="sign-out"
                            size={size}
                            color={color}
                        />
                    }
                    label="Sair"
                    onPress={() => { }}
                />
            </FooterView>
        </ContainerView>

        //#endregion
    )
}

export default DrawerContent
