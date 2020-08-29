import React from 'react';
import { AppLoading } from "expo";
import { enableScreens } from 'react-native-screens';

import AppStack from './src/routes/AppStack'

import { Poppins_400Regular, Poppins_600SemiBold, useFonts } from '@expo-google-fonts/poppins'
import { Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'

let fontsLoaded: boolean;

function LoadFonts() {
    [fontsLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_600SemiBold,
        Roboto_400Regular,
        Roboto_700Bold
    })
}

export default function App() {
    LoadFonts()


    if (!fontsLoaded) {
        return <AppLoading />
    }

    enableScreens()
    return (
        <AppStack />
    );
}
