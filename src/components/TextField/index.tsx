import React, { useEffect, useState, useRef } from 'react';
import { Animated, TextInputProps, Text } from 'react-native';

import {
    PasswordIcon,
    TextFieldInputStyle,
    TextFieldPlaceholder,
    TextFieldStyle
} from './styles';
import { colors } from '../../styles';

interface TextFieldProperties extends TextInputProps {
    label: string,
    keyboard?: string,
    fieldType?: string,
    clear?: boolean,
    length?: number,
    fieldWidth?: number
    onTextChange?(text: string): void
}

const TextField: React.FC<TextFieldProperties> = ({
    onTextChange,
    label,
    keyboard,
    fieldType,
    fieldWidth,
    clear,
    length,
    ...rest }) => {

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

    const [inputText, setInputText] = useState('');

    const [isPassword, setIsPassword] = useState(fieldType === 'password' ? true : false);
    const [secure, setSecure] = useState(true);

    useEffect(() => {
        if(clear) setInputText('');
    })

    return (
        <TextFieldStyle style={{ width: fieldWidth || '80%' }}>
            { isPassword ? <PasswordIcon name={ secure ? 'eye-off' : 'eye' } size={24}
                    color={colors.grayPurple} onPress={() => setSecure(!secure)} /> : <Text/> }
            <TextFieldPlaceholder style={{ fontSize: animatedTextSize, top: animatedLabelPosition }}
                >{ label }</TextFieldPlaceholder>
            <TextFieldInputStyle
                secureTextEntry={isPassword && secure}
                keyboardType={keyboard} value={inputText}
                maxLength={length}
                onChangeText={(text: string) => { setInputText(text); if(onTextChange) onTextChange(text); }}
                onFocus={() => {
                    if(!inputText) animateOnFocus();
                }}
                onBlur={() => {
                    if(!inputText) animateOnBlur();
                }}
                style={{ opacity: animatedInput, width: isPassword ? '82%' : '95%' }}
                />
        </TextFieldStyle>
    )
}

export default TextField;
