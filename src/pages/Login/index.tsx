import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { setStatusBarHidden, setStatusBarStyle } from 'expo-status-bar';

import { AppStackParamsList } from '../../routes/AppStack';
import TextField from '../../components/TextField';
import Checkbox from '../../components/Checkbox';
import FormButton from '../../components/FormButton';

import {
    LoginContainer, LoginLogo, LoginFooter,
    CheckboxContainer, CheckboxText, ForgotPassword
} from './styles';
import { colors } from '../../styles';

type DefaultLoginPageProps = StackScreenProps<
    AppStackParamsList,
    "LoginPage"
>

export default function LoginPage({ navigation }: DefaultLoginPageProps) {

    setStatusBarHidden(true, "slide");
    setStatusBarStyle('dark');

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [checked, setChecked] = useState(false);

    const handleEmail = (text: string) => {
        setEmail(text);
    }

    const handlePassword = (text: string) => {
        setPassword(text);
    }

    return (
        <LoginContainer>
            <LoginLogo source={require('../../assets/icon.png')}></LoginLogo>

            <TextField label='E-mail' keyboard='email-address' onTextChange={(text: string) => handleEmail(text)} />
            <TextField label='Senha' fieldType='password' onTextChange={(text: string) => handlePassword(text)} />


            <LoginFooter>
                <CheckboxContainer onTouchStart={() => setChecked(!checked)} >
                    <Checkbox checked={checked} />
                    <CheckboxText>Lembrar</CheckboxText>
                </CheckboxContainer>
                <ForgotPassword onPress={() => alert('Esqueceu?')}>Esqueceu a senha?</ForgotPassword>
            </LoginFooter>

            <FormButton label='Login'
                color={colors.grayPurple}
                disableColor={colors.grayPurple + '88'}
                ripple={colors.lightPurple}
                disable={!email || !password}
                onPress={() => {
                    navigation.navigate("Drawer", { MainPage: undefined })
                }} />

        </LoginContainer>
    )
}
