import React, {
    useState,
    useRef,
    useEffect
} from 'react';
import { Keyboard, Animated } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { StatusBar, setStatusBarStyle } from 'expo-status-bar';
import * as SecureStore from 'expo-secure-store';

import { AppStackParamsList } from '../../navigations/AppStack';
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

import api from '../../services/api';

import { LoginPayload } from '../../services/User/login.payload'
import { LoginProxy } from '../../services/User/login.proxy';

import { colors } from '../../styles';

import { rules } from '../../utils';
import AuthSwitch from '../../components/AuthSwitch';

type DefaultLoginPageProps = StackScreenProps<
    AppStackParamsList,
    "LoginPage"
>

export default function LoginPage({ navigation }: DefaultLoginPageProps) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [checked, setChecked] = useState(false);

    //#region Keyboard

    const animatedLogin = useRef(new Animated.Value(0)).current;
    const animatedLogo = useRef(new Animated.Value(150)).current;

    useEffect(() => {
        Keyboard.addListener('keyboardDidShow', _keyboardDidShow);
        Keyboard.addListener('keyboardDidHide', _keyboardDidHide);
        setStatusBarStyle('light');

        return () => {
            Keyboard.removeListener('keyboardDidShow', _keyboardDidShow);
            Keyboard.removeListener('keyboardDidHide', _keyboardDidHide);
        }
    }, []);

    const _keyboardDidShow = () => {
        Animated.parallel([
            Animated.timing(animatedLogin, {
                toValue: 70,
                duration: 0,
                useNativeDriver: false
            }),
            Animated.timing(animatedLogo, {
                toValue: 50,
                duration: 0,
                useNativeDriver: false
            })
        ]).start();
    }

    const _keyboardDidHide = () => {
        Animated.parallel([
            Animated.timing(animatedLogin, {
                toValue: 0,
                duration: 500,
                useNativeDriver: false
            }),
            Animated.timing(animatedLogo, {
                toValue: 150,
                duration: 500,
                useNativeDriver: false
            })
        ]).start();
    }

    //#endregion

    const isEmailValid = !!email && rules.emailRegex.test(email);
    const isPasswordValid = !!password && rules.passwordRegex.test(password);

    const [clearPassword, setClearPassword] = useState(false);
    const [clearEmail, setClearEmail] = useState(false);

    async function login() {
        try {
            const payload: LoginPayload = {
                email,
                password
            }
            const response = await api.post<LoginProxy>('users/login', payload)
            if (response.status == 201) {
                await SecureStore.setItemAsync('access_token', response.data.access_token)
                navigation.navigate("Drawer", {
                    MainPage: undefined,
                    ProfilePage: undefined
                })
                return;
            }
            onWrongCredentials()
        } catch (error) {
            console.log(error)
        }
    }

    function onWrongCredentials() {

    }

    return (
        <ContainerSafeAreaView>
            <StatusBar
                translucent
                backgroundColor='#612e96'
            />
            <AuthSwitch />
            <LoginContainer style={{ top: animatedLogin }}>
                <LoginLogo
                    source={require('../../assets/icon.png')}
                    style={{ width: animatedLogo, height: animatedLogo }}
                />
                <TextField
                    label='E-mail'
                    keyboard='email-address'
                    clear={clearEmail}
                    onTextChange={setEmail}
                />
                <TextField
                    label='Senha'
                    fieldType='password'
                    clear={clearPassword}
                    onTextChange={setPassword}
                />
                <LoginFooter>
                    <CheckboxContainer onTouchStart={() => setChecked(!checked)} >
                        <Checkbox checked={checked} />
                        <CheckboxText>Lembrar</CheckboxText>
                    </CheckboxContainer>
                    <ForgotPassword onPress={() => alert('Esqueceu?')}>Esqueceu a senha?</ForgotPassword>
                </LoginFooter>
                <FormButton
                    disable={false}
                    label='Login'
                    color={colors.grayPurple}
                    disableColor={colors.grayPurple + '88'}
                    ripple={colors.lightPurple}
                    onPress={login}
                />
            </LoginContainer>
        </ContainerSafeAreaView>
    )
}

//#region Old code

    // const onLoginButtonPress = () => {
    //     if (!isPasswordValid) {
    //         setClearPassword(true);
    //         setPassword('');
    //         alert('Password: \nMin 6 characters with at least one capital letter, one lower case and one number');

    //         setTimeout(() => setClearPassword(false), 10);

    //         return;
    //     }

    //     const user = { email, password };

    //     api.post(`/auth/login`, user)
    //         .then(response => {
    //             const resp = response.data;
    //             const token = resp.access_token;
    //             const status = response.status;

    //             if (status == 201) {
    //                 api.get(`users/profile`, {
    //                     headers: {
    //                         'Authorization': 'Bearer ' + token
    //                     }
    //                 })
    //                     .then(res => {
    //                         userModel.email = res.data.username;
    //                         userModel.authToken = token;

    //                         setClearEmail(true);
    //                         setClearPassword(true);
    //                         setPassword('');
    //                         setEmail('');

    //                         setTimeout(() => {
    //                             setClearEmail(false);
    //                             setClearPassword(false);
    //                         }, 10);
    //                         return navigation.navigate("Drawer", { MainPage: undefined, ProfilePage: undefined });
    //                     })
    //                     .catch(error => {
    //                         alert('Token ' + error);
    //                     })
    //             }
    //         })
    //         .catch(error => {
    //             if (error.response.status == 400) {
    //                 alert('Wrong credentials provided!');
    //             } else {
    //                 alert(error);
    //             }
    //         })
    // }

    //#endregion
