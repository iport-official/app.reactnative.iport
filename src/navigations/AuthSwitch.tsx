/* eslint-disable react/display-name */
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import React from 'react';
import { ViewProps } from 'react-native';

import { colors } from '../styles';

import AuthSwitchText from '../components/atoms/AuthSwitchText';

import LoginPage from '../pages/Login';
import SignupPage from '../pages/Signup';

interface AuthSwitchProps extends ViewProps {
    isSignup?: boolean;
}

const Tab = createMaterialTopTabNavigator();


const AuthSwitch: React.FC<AuthSwitchProps> = ({
    isSignup
}: AuthSwitchProps) => {
    return (
        <Tab.Navigator
            initialRouteName="Login"
            screenOptions={() => ({
                tabBarLabel: ({ focused }: { focused: boolean }) => {
                    return (
                        <AuthSwitchText isActive={focused}>
                            {isSignup ? 'Login' : 'SignUp'}
                        </AuthSwitchText>
                    );
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
            }}
        >
            <Tab.Screen name="Login" component={LoginPage} />
            <Tab.Screen name="SignUp" component={SignupPage} />
        </Tab.Navigator>
    );
};

export default AuthSwitch;
