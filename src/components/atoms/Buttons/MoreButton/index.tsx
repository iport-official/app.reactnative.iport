import React, { useContext, useEffect, useRef } from 'react';
import { Animated, View, ViewProps } from 'react-native';

import { Rectangle } from './styles';

import ActionButtonContext from '../../../../contexts/actionButton';

interface MoreButtonProps extends ViewProps {
    startColor?: string;
    endColor?: string;
}

const MoreButton: React.FC<MoreButtonProps> = ({
    startColor = '#fff',
    endColor = '#46266c'
}: MoreButtonProps) => {

    const { isActive } = useContext(ActionButtonContext);

    const animatedHeight = useRef(new Animated.Value(14)).current;
    const animatedRotation = useRef(new Animated.Value(0)).current;
    const animatedOpacity = useRef(new Animated.Value(1)).current;

    const animateOpen = () => {
        Animated.parallel([
            Animated.sequence([
                Animated.timing(animatedHeight, {
                    toValue: 0,
                    duration: 300,
                    useNativeDriver: true
                }),
                Animated.timing(animatedOpacity, {
                    toValue: 0,
                    duration: 50,
                    useNativeDriver: true
                }),
                Animated.timing(animatedRotation, {
                    delay: 100,
                    toValue: 1,
                    duration: 300,
                    useNativeDriver: true
                })
            ])
        ]).start();
    }

    const animateClose = () => {
        Animated.parallel([
            Animated.sequence([
                Animated.timing(animatedRotation, {
                    toValue: 0,
                    duration: 300,
                    useNativeDriver: true
                }),
                Animated.timing(animatedOpacity, {
                    toValue: 1,
                    duration: 50,
                    useNativeDriver: true
                }),
                Animated.timing(animatedHeight, {
                    delay: 100,
                    toValue: 14,
                    duration: 300,
                    useNativeDriver: true
                })
            ])
        ]).start();
    }

    const moveDown = animatedHeight.interpolate({
        inputRange: [0, 14],
        outputRange: [-5, -15]
    });

    const moveUp = animatedHeight.interpolate({
        inputRange: [0, 14],
        outputRange: [5, 15]
    });

    const spinLeft = animatedRotation.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '45deg']
    });

    const spinRight = animatedRotation.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '-45deg']
    });

    const handlePress = () => {
        if(isActive) {
            animateOpen();
        } else {
            animateClose();
        }
    }

    useEffect(() => {
        handlePress();
    }, [isActive]);

    return (
        <View
            style={{
                width: 60,
                height: 60,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#fff0'
            }} >
            <Rectangle
                style={{
                    backgroundColor: !isActive ? startColor : endColor,
                    transform: [{ translateY: moveUp, rotate: spinLeft }]
                }} />
            <Rectangle
                style={{
                    backgroundColor: !isActive ? startColor : endColor,
                    opacity: animatedOpacity
                }} />
            <Rectangle
                style={{
                    backgroundColor: !isActive ? startColor : endColor,
                    transform: [{ translateY: moveDown, rotate: spinRight }]
                }} />
        </View>
    )
}

export default MoreButton;
