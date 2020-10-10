import React from "react";
import { ViewProps } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import { colors } from "../styles";

import LoginPage from "../pages/Login";
import SignupPage from "../pages/Signup";
import AuthSwitchText from "../components/atoms/AuthSwitchText";

interface AuthSwitchProps extends ViewProps {
    isSignup?: boolean;
}

const Tab = createMaterialTopTabNavigator();

const AuthSwitch: React.FC<AuthSwitchProps> = ({ isSignup }) => {
    return (
        <Tab.Navigator
            initialRouteName="Login"
            screenOptions={({ route }) => ({
                tabBarLabel: ({ focused }) => {
                    return (
                        <AuthSwitchText isActive={focused}>
                            {route.name}
                        </AuthSwitchText>
                    );
                },
            })}
            tabBarOptions={{
                style: {
                    marginTop: 24,
                    justifyContent: "center",
                    height: 100,
                    backgroundColor: colors.vividPurple,
                },
                indicatorStyle: {
                    backgroundColor: "#fff",
                    height: 3,
                },
            }}
        >
            <Tab.Screen name="Login" component={LoginPage} />
            <Tab.Screen name="SignUp" component={SignupPage} />
        </Tab.Navigator>
    );
};

export default AuthSwitch;
