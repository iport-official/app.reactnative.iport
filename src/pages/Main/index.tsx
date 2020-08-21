import React from 'react'
import { Image } from 'react-native'
import { AppStackParamsList } from '../../routes/AppStack'
import { StackScreenProps } from '@react-navigation/stack'

import { Ionicons } from '@expo/vector-icons';

import photo from '../../assets/foto_example.png'

import {
    ContainerKeyboardAvoidView,
    HeaderView
} from './styles'

type DefaultMainPageProps = StackScreenProps<
    AppStackParamsList,
    "MainPage"
>

export default function MainPage({ navigation }: DefaultMainPageProps) {
    return (
        <ContainerKeyboardAvoidView>
            <HeaderView>
                <Ionicons
                    name="ios-menu"
                    size={24}
                    color="#fff"
                />
                <Image
                    source={photo}
                />
            </HeaderView>
        </ContainerKeyboardAvoidView>
    )
}
