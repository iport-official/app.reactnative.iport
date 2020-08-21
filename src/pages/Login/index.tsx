import React from 'react'
import { View } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'

import { AppStackParamsList } from '../../routes/AppStack'

type DefaultLoginPageProps = StackScreenProps<
    AppStackParamsList,
    "LoginPage"
>

export default function LoginPage({ navigation }: DefaultLoginPageProps) {
    return (
        <View />
    )
}
