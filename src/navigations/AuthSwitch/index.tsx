import React from 'react';
import { View, ViewProps } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Poppins_600SemiBold } from '@expo-google-fonts/poppins';

import {
    AuthSwitchText
} from './styles';

import { colors } from '../../styles';

import LoginPage from '../../pages/Login';
import SignupPage from '../../pages/Signup';

interface AuthSwitchProps extends ViewProps {
    isSignup?: boolean
}

const Tab = createMaterialTopTabNavigator();

const AuthSwitch: React.FC<AuthSwitchProps> = ({ isSignup, ...rest }) => {

    return (
        <Tab.Navigator
            initialRouteName='Login'
            screenOptions={({ route }) => ({
                tabBarLabel: ({ focused }) => {
                    const text = route.name === 'Login' ? 'Login' : 'Sign Up';
                    return <AuthSwitchText isActive={focused}>{ text }</AuthSwitchText>
                }
            })}
            tabBarOptions={{
                style: {
                    marginTop: 24,
                    justifyContent: 'center',
                    height: 100,
                    backgroundColor: colors.vividPurple
                },
                indicatorStyle: {
                    backgroundColor: '#fff',
                    height: 3
                }
            }}>
            <Tab.Screen name='Login' component={LoginPage} />
            <Tab.Screen name='SignUp' component={SignupPage} />
        </Tab.Navigator>
    )
}

export default AuthSwitch;
