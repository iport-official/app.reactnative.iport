import React from 'react';
import { ViewProps } from 'react-native';
import { StackActions, useNavigation } from '@react-navigation/native';

import {
    AuthSwitchContainer,
    AuthSwitchText
} from './styles';

interface AuthSwitchProps extends ViewProps {
    isSignup?: boolean
}

const AuthSwitch: React.FC<AuthSwitchProps> = ({ isSignup, ...rest }) => {

    const navigation = useNavigation();

    return (
        <AuthSwitchContainer { ...rest }>
            <AuthSwitchText
                onPress={() => {
                    if(isSignup) navigation.dispatch(StackActions.replace('LoginPage'));
                }}
                isActive={!isSignup}>Login</AuthSwitchText>
            <AuthSwitchText
                onPress={() => {
                    if(!isSignup) navigation.dispatch(StackActions.replace('SignupPage'));
                }}
                isActive={isSignup}>Sign Up</AuthSwitchText>
        </AuthSwitchContainer>
    )
}

export default AuthSwitch;
