import React from 'react';
import { View, Text } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { setStatusBarHidden, setStatusBarStyle } from 'expo-status-bar';

import { AppStackParamsList } from '../../routes/AppStack';
import TextField from '../../components/TextField';
import Checkbox from '../../components/Checkbox';
import FormButton from '../../components/FormButton';

import { LoginContainer, LoginLogo, LoginFooter,
    CheckboxContainer, CheckboxText, ForgotPassword } from './styles';
import { colors } from '../../styles';

type DefaultLoginPageProps = StackScreenProps<
    AppStackParamsList,
    "LoginPage"
>

export default function LoginPage({ navigation }: DefaultLoginPageProps) {

    setStatusBarHidden(true, "slide");
    setStatusBarStyle('dark');

    return (
        <LoginContainer>
            <LoginLogo source={require('../../assets/icon.png')}></LoginLogo>

            <TextField label='E-mail'/>
            <TextField label='Senha'/>

            <LoginFooter>
                <CheckboxContainer>
                    <Checkbox />
                    <CheckboxText>Lembrar</CheckboxText>
                </CheckboxContainer>
                <ForgotPassword onPress={() => alert('Esqueceu?')}>Esqueceu a senha?</ForgotPassword>
            </LoginFooter>

            <FormButton label='Login' color={colors.grayPurple}
                disableColor={colors.grayPurple + '88'}
                ripple={colors.lightPurple}/>

        </LoginContainer>
    )
}
