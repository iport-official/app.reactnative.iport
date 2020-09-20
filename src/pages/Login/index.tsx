import React, {
    useState,
    useRef,
    useEffect
} from 'react';
import { Keyboard, Animated } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { StatusBar, setStatusBarStyle } from 'expo-status-bar';
import { StackScreenProps } from '@react-navigation/stack';

import { ApplicationState } from '../../store';
import { LoginProxy, UserProxy, UserTypes } from '../../store/ducks/user/types';

import {
    ContainerSafeAreaView,
    LoginContainer,
    LoginLogo,
    LoginFooter,
    CheckboxContainer,
    CheckboxText,
    ForgotPassword
} from './styles';

import { AppStackParamsList } from '../../navigations/AppStack';
import TextField from '../../components/atoms/TextField';
import Checkbox from '../../components/atoms/Checkbox';
import FormButton from '../../components/atoms/FormButton';

import { colors } from '../../styles';


type DefaultLoginPageProps = StackScreenProps<
    AppStackParamsList,
    "LoginPage"
>

export default function LoginPage({ navigation }: DefaultLoginPageProps) {

    const dispatch = useDispatch()

    const loading = useSelector<ApplicationState, boolean>(state => state.user.loading)
    const error = useSelector<ApplicationState, boolean>(state => state.user.error)
    const login = useSelector<ApplicationState, LoginProxy | null>(state => state.user.login)
    const user = useSelector<ApplicationState, UserProxy | null>(state => state.user.user)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [checked, setChecked] = useState(false)

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

    const [clearPassword, setClearPassword] = useState(false)
    const [clearEmail, setClearEmail] = useState(false)

    useEffect(() => {
        if (login === null)
            return

        dispatch({
            type: UserTypes.GET_PROFILE_REQUEST,
            payload: {
                access_token: login?.access_token
            }
        })
    }, [login])

    useEffect(() => {
        if (error)
            onWrongCredentials()
    }, [error])

    useEffect(() => {
        if (user !== null)
            navigation.navigate("Drawer", {
                MainPage: undefined,
                ProfilePage: undefined
            })
    }, [user])

    function performLogin(): void {
        dispatch({
            type: UserTypes.LOGIN_REQUEST,
            payload: {
                email,
                password
            }
        })
    }

    function onWrongCredentials() {
        alert('E-mail ou senha incorreta! Por favor, tente novamente.');
    }

    return (
        <ContainerSafeAreaView>
            <StatusBar
                translucent
                backgroundColor='#612e96'
            />
            <LoginContainer style={{ top: animatedLogin }}>
                <LoginLogo
                    source={require('../../assets/icon.png')}
                    style={{ width: animatedLogo, height: animatedLogo }}
                />
                <TextField
                    placeholder='E-mail'
                    keyboard='email-address'
                    clear={clearEmail}
                    onTextChange={setEmail}
                />
                <TextField
                    placeholder='Senha'
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
                    onPress={performLogin}
                />
            </LoginContainer>
        </ContainerSafeAreaView>
    )
}
