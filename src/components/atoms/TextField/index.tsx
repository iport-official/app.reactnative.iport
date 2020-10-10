import React, { useEffect, useState, useRef } from 'react';
import { Animated, TextInputProps, Text } from 'react-native';

import { colors } from '../../../styles';
import {
    PasswordIcon,
    TextFieldInputStyle,
    TextFieldPlaceholder,
    TextFieldStyle
} from './styles';

interface TextFieldProps extends TextInputProps {
    placeholder: string,
    keyboard?: string,
    fieldType?: string,
    textValue?: string,
    clear?: boolean,
    length?: number,
    fieldWidth?: string,
    onTextChange?(text: string): void,
    onFieldBlur?(text: string): void
}

const TextField: React.FC<TextFieldProps> = ({
    onTextChange,
    onFieldBlur,
    placeholder: label,
    keyboard,
    fieldType,
    fieldWidth = "100%",
    textValue = '',
    clear = false,
    length
}: TextFieldProps) => {

    const [inputText, setInputText] = useState(textValue);
    const [isPassword] = useState(fieldType === 'password' ? true : false);
    const [secure, setSecure] = useState(true);

    useEffect(() => {
        if (clear) setInputText('');

        if(textValue) {
            animateOnFocus();
        }
    }, []);

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
        <TextFieldStyle width={fieldWidth}>
            { isPassword ?
                <PasswordIcon
                    name={secure ? 'eye-off' : 'eye'}
                    size={24}
                    color={colors.grayPurple}
                    onPress={() => setSecure(!secure)} /> :
                <Text />
            }
            <TextFieldPlaceholder
                style={{
                    fontSize: animatedTextSize,
                    top: animatedLabelPosition
                }}
            >
                {label}
            </TextFieldPlaceholder>
            <TextFieldInputStyle
                secureTextEntry={isPassword && secure}
                keyboardType={keyboard}
                maxLength={length}
                value={inputText}
                onChangeText={(text: string) => { setInputText(text); if (onTextChange) onTextChange(text); }}
                onFocus={() => {
                    if (!inputText) animateOnFocus();
                }}
                onBlur={() => {
                    if (onFieldBlur) onFieldBlur(inputText);
                    if (!inputText) animateOnBlur();
                }}
                style={{ opacity: animatedInput, width: isPassword ? '82%' : '95%' }}
            />
        </TextFieldStyle>
    )
}

export default TextField;
