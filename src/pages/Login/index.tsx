import React, { useState, useRef, useEffect } from 'react';
import { Keyboard, Animated } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { StatusBar, setStatusBarStyle, setStatusBarTranslucent } from 'expo-status-bar'


import { AppStackParamsList } from '../../routes/AppStack';
import TextField from '../../components/TextField';
import Checkbox from '../../components/Checkbox';
import FormButton from '../../components/FormButton';

import {
    ContainerSafeAreaView,
    LoginContainer,
    LoginLogo,
    LoginFooter,
    CheckboxContainer,
    CheckboxText,
    ForgotPassword
} from './styles';
import { colors } from '../../styles';

type DefaultLoginPageProps = StackScreenProps<
    AppStackParamsList,
    "LoginPage"
>

export default function LoginPage({ navigation }: DefaultLoginPageProps) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [checked, setChecked] = useState(false);

    const animatedLogin = useRef(new Animated.Value(20)).current;
    const animatedLogo = useRef(new Animated.Value(150)).current;

    const handleEmail = (text: string) => {
        setEmail(text);
    }

    const handlePassword = (text: string) => {
        setPassword(text);
    }

    useEffect(() => {
        Keyboard.addListener('keyboardDidShow', _keyboardDidShow);
        Keyboard.addListener('keyboardDidHide', _keyboardDidHide);

        return () => {
            Keyboard.removeListener('keyboardDidShow', _keyboardDidShow);
            Keyboard.removeListener('keyboardDidHide', _keyboardDidHide);
        }
    }, []);

    const _keyboardDidShow = () => {
        setStatusBarStyle('light')
        Animated.parallel([
            Animated.timing(animatedLogin, {
                toValue: 150,
                duration: 200,
                useNativeDriver: false
            }),
            Animated.timing(animatedLogo, {
                toValue: 1500,
                duration: 200,
                useNativeDriver: false
            })
        ]).start();
    }

    const _keyboardDidHide = () => {
        setStatusBarStyle('dark')
        Animated.parallel([
            Animated.timing(animatedLogin, {
                toValue: 20,
                duration: 200,
                useNativeDriver: false
            }),
            Animated.timing(animatedLogo, {
                toValue: 150,
                duration: 200,
                useNativeDriver: false
            })
        ]).start();
    }

    return (
        <ContainerSafeAreaView>
            <StatusBar translucent />
            <LoginContainer style={{ paddingBottom: animatedLogin }}>
                <LoginLogo source={require('../../assets/icon.png')}
                    style={{ width: animatedLogo }}></LoginLogo>

                <TextField label='E-mail' keyboard='email-address' onFocus={() => alert('d')}
                    onTextChange={(text: string) => handleEmail(text)} />
                <TextField label='Senha' fieldType='password'
                    onTextChange={(text: string) => handlePassword(text)} />

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
                    onPress={() => { navigation.navigate("Drawer", { MainPage: undefined }) }} />

            </LoginContainer>
        </ContainerSafeAreaView>
    )
}
