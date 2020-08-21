import React from 'react'
import { View } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'
import { AppStackParamsList } from '../../routes/AppStack'

type DefaultMainPageProps = StackScreenProps<
    AppStackParamsList,
    "MainPage"
>

export default function MainPage({ navigation }: DefaultMainPageProps) {
    return (
        <View />
    )
}
