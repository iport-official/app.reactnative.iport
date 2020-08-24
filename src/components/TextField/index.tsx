import React, { useState, useRef } from 'react';
import { Animated, TextInputProps } from 'react-native';

import { TextFieldStyle, TextFieldPlaceholder, TextFieldInputStyle } from './styles';
import styled from 'styled-components/native';

interface TextFieldProperties extends TextInputProps {
    label: string,
    onEnter?(): any,
    onLeave?(): any
}

const TextField: React.FC<TextFieldProperties> = ({ onEnter, onLeave, label, ...rest }) => {

    const animatedInput = useRef(new Animated.Value(0)).current;
    const animatedTextSize = useRef(new Animated.Value(16)).current;
    const animatedLabelPosition = useRef(new Animated.Value(15)).current;

    const animateOnFocus = () => {
        Animated.parallel([
            Animated.timing(animatedInput, {
                toValue: 1,
                duration: 200,
                useNativeDriver: false
            }),
            Animated.timing(animatedTextSize, {
                toValue: 12,
                duration: 150,
                useNativeDriver: false
            }),
            Animated.timing(animatedLabelPosition, {
                toValue: 0,
                duration: 150,
                useNativeDriver: false
            })
        ]).start();
    }

    const animateOnBlur = () => {
        Animated.parallel([
            Animated.timing(animatedInput, {
                toValue: 0,
                duration: 200,
                useNativeDriver: false
            }),
            Animated.timing(animatedTextSize, {
                toValue: 16,
                duration: 150,
                useNativeDriver: false
            }),
            Animated.timing(animatedLabelPosition, {
                toValue: 15,
                duration: 150,
                useNativeDriver: false
            })
        ]).start();
    }

    return (
        <TextFieldStyle>
            <TextFieldPlaceholder style={{ fontSize: animatedTextSize, top: animatedLabelPosition }}
                >{ label }</TextFieldPlaceholder>
            <TextFieldInputStyle
                onFocus={() => {
                    animateOnFocus();
                    if(onEnter) onEnter();
                }}
                onBlur={() => {
                    animateOnBlur();
                    if(onLeave) onLeave();
                }} style={{ opacity: animatedInput }}
                />
        </TextFieldStyle>
    )
}

export default TextField;
