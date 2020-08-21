import React from 'react'
import { AppStackParamsList } from '../../routes/AppStack'
import { StackScreenProps } from '@react-navigation/stack'

import { Ionicons } from '@expo/vector-icons';

import ProfilePhoto from '../../components/ProfilePhoto'

import photo from '../../assets/foto_example.png'

import {
    HeaderView
} from './styles'
import { SafeAreaView } from 'react-native';

import Jobs from '../../components/Jobs';
import Job from '../../components/Jobs/Job';

type DefaultMainPageProps = StackScreenProps<
    AppStackParamsList,
    "MainPage"
>

export default function MainPage({ navigation }: DefaultMainPageProps) {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <HeaderView>
                <Ionicons
                    name="ios-menu"
                    size={24}
                    color="#fff"
                />
                <ProfilePhoto source={photo} />
            </HeaderView>
            <Job />
        </SafeAreaView>
    )
}
