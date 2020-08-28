import React, { useRef, useState, useEffect } from 'react';
import { Animated, Keyboard, Easing } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import {
    ArrowIcon,
    ContainerFooterView,
    FullScreenView,
    Overlay,
    SearchBox,
    SearchIcon,
    TouchableArea
} from './styles';

import arrowImage from '../../assets/TriangleArrow.png';

export default function MainFooter() {

    const [isFooterShowed, setIsFooterShowed] = useState(false);
    const animatedFooter = useRef(new Animated.Value(40)).current;
    const animatedOverlay = useRef(new Animated.Value(0)).current;
    const animatedIcon = useRef(new Animated.Value(0)).current;
    const animatedSearchIcon = useRef(new Animated.Value(47)).current;
    const animatedSearchInput = useRef(new Animated.Value(0)).current;

    const [isKeyboardShowed, setIsKeyboardShowed] = useState(false);
    useEffect(() => {
        Keyboard.addListener('keyboardDidShow', _keyboardDidShow);
        Keyboard.addListener('keyboardDidHide', _keyboardDidHide);

        if(!isFooterShowed){
            setIsSearchActivated(false);
            animatedSearchOff();
        }

        return () => {
            Keyboard.removeListener('keyboardDidShow', _keyboardDidShow);
            Keyboard.removeListener('keyboardDidHide', _keyboardDidHide);
        }
    })

    const _keyboardDidShow = () => {
        setIsKeyboardShowed(true);
        Animated.parallel([
            Animated.timing(animatedFooter, {
                delay: 100,
                toValue: isFooterShowed ? 120 : 40,
                duration: 700,
                useNativeDriver: false
            })
        ]).start();
    }

    const _keyboardDidHide = () => {
        setIsKeyboardShowed(false);
        Animated.parallel([
            Animated.timing(animatedFooter, {
                delay: 100,
                toValue: isFooterShowed ? 300 : 40,
                duration: 1000,
                useNativeDriver: false
            })
        ]).start();
    }

    const show = () => {
        setIsFooterShowed(true);
        Animated.parallel([
            Animated.timing(animatedFooter, {
                toValue: isKeyboardShowed ? 120 : 300,
                duration: 300,
                useNativeDriver: false
            }),
            Animated.timing(animatedOverlay, {
                toValue: 1,
                duration: 300,
                useNativeDriver: false
            }),
            Animated.timing(animatedIcon, {
                toValue: 1,
                duration: 300,
                easing: Easing.linear,
                useNativeDriver: false
            })
        ]).start();
    }

    const hide = () => {
        setIsFooterShowed(false);
        Animated.parallel([
            Animated.timing(animatedFooter, {
                toValue: 40,
                duration: 300,
                useNativeDriver: false
            }),
            Animated.timing(animatedOverlay, {
                toValue: 0,
                duration: 300,
                useNativeDriver: false
            }),
            Animated.timing(animatedIcon, {
                toValue: 0,
                duration: 300,
                easing: Easing.linear,
                useNativeDriver: false
            })
        ]).start();
    }

    const animatedSearchOn = () => {
        Animated.parallel([
            Animated.timing(animatedSearchIcon, {
                toValue: 10,
                duration: 400,
                useNativeDriver: false
            }),
            Animated.timing(animatedSearchInput, {
                delay: 400,
                toValue: 70,
                duration: 400,
                useNativeDriver: false
            })
        ]).start(() => {
            setIsSearchActivated(true);
        });
    }

    const animatedSearchOff = () => {
        Animated.parallel([
            Animated.timing(animatedSearchIcon, {
                delay: 400,
                toValue: 47,
                duration: 400,
                useNativeDriver: false
            }),
            Animated.timing(animatedSearchInput, {
                toValue: 0,
                duration: 400,
                useNativeDriver: false
            })
        ]).start();
    }

    const spin = animatedIcon.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '180deg']
    });

    const searchTransform = animatedSearchIcon.interpolate({
        inputRange: [0, 100],
        outputRange: ['0%', '100%']
    });

    const searchOpen = animatedSearchInput.interpolate({
        inputRange: [0, 100],
        outputRange: ['0%', '100%']
    });

    const [searchText, setSearchText] = useState('');
    const [isSearchActivated, setIsSearchActivated] = useState(false);

    return (
        //#region JSX
        <FullScreenView>
            <Overlay style={{ opacity: animatedOverlay }}
                onTouchStart={() => hide()}
                pointerEvents={ isFooterShowed ? 'box-only' : 'none' }  />

            <ContainerFooterView style={{ height: animatedFooter }}>
                <TouchableArea
                    activeOpacity={1}
                    onPress={() => {
                        if(!isFooterShowed) show();
                        else hide();
                    }}>
                    <ArrowIcon style={{ transform: [{ rotate: spin }] }} source={arrowImage} />
                </TouchableArea>
                <SearchBox
                    style={{ width: searchOpen, paddingHorizontal: isSearchActivated ? 5 : 0 }}
                    value={searchText}
                    onChangeText={(text: string) => setSearchText(text)}
                    onBlur={() => {
                        if(searchText) {
                            setIsSearchActivated(false);
                            animatedSearchOff();
                        }
                    }} />
                <SearchIcon
                    style={{ left: searchTransform, width: isSearchActivated ? 25 : '40%' }}
                    onPress={() => {
                        animatedSearchOn();
                    }}>
                    <FontAwesome name="search" size={24} color="white" />
                </SearchIcon>
            </ContainerFooterView>
        </FullScreenView>
        //#endregion
    )
}
