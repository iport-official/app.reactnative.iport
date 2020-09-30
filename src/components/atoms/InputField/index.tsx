import React, { useRef, useState } from "react";
import { Animated, StyleProp, TextInputProps, ViewStyle } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import {
    ContainerView,
    TextInputView,
    PlaceholderView,
    PlaceholderText,
    ContainerTextInput,
    LineView,
    DescriptionText,
} from "./styles";

interface InputFieldProps extends TextInputProps {
    duration?: number;
    password?: boolean;
    description?: string;
    information?: string;
    style?: StyleProp<ViewStyle>;
}

const InputField: React.FC<InputFieldProps> = ({
    duration = 200,
    password = false,
    placeholder,
    description,
    information,
    style,
}) => {
    const [focused, setFocused] = useState(false);

    const textInputPositionAnimation = useRef(new Animated.Value(0)).current;
    const lineWidthAnimation = useRef(new Animated.Value(0)).current;

    const placeholderOpacityAnimation = useRef(new Animated.Value(0.3)).current;
    const placeholderTopAnimation = useRef(new Animated.Value(15)).current;
    const placehodlerFontSizeAnimation = useRef(new Animated.Value(16)).current;

    function handleOnFocus() {
        Animated.parallel([
            Animated.timing(placehodlerFontSizeAnimation, {
                toValue: 12,
                duration,
                useNativeDriver: false,
            }),
            Animated.timing(placeholderTopAnimation, {
                toValue: 0,
                duration,
                useNativeDriver: false,
            }),
            Animated.timing(textInputPositionAnimation, {
                toValue: 4,
                duration,
                useNativeDriver: false,
            }),
            Animated.timing(placeholderOpacityAnimation, {
                toValue: 1,
                duration,
                useNativeDriver: false,
            }),
            Animated.timing(lineWidthAnimation, {
                toValue: 1,
                duration,
                useNativeDriver: false,
            }),
        ]).start();
    }

    function handleOnBlur() {
        Animated.parallel([
            Animated.timing(placehodlerFontSizeAnimation, {
                toValue: 16,
                duration,
                useNativeDriver: false,
            }),
            Animated.timing(placeholderTopAnimation, {
                toValue: 16,
                duration,
                useNativeDriver: false,
            }),
            Animated.timing(textInputPositionAnimation, {
                toValue: 0,
                duration,
                useNativeDriver: false,
            }),
            Animated.timing(placeholderOpacityAnimation, {
                toValue: 0.3,
                duration,
                useNativeDriver: false,
            }),
            Animated.timing(lineWidthAnimation, {
                toValue: 0,
                duration,
                useNativeDriver: false,
            }),
        ]).start();
    }

    return (
        //#region JSX

        <ContainerView style={style}>
            <TextInputView>
                <ContainerTextInput
                    onFocus={handleOnFocus}
                    onBlur={handleOnBlur}
                    style={{
                        transform: [{ translateY: textInputPositionAnimation }],
                    }}
                />
                <PlaceholderView
                    pointerEvents="none"
                    style={{ top: placeholderTopAnimation }}
                >
                    <PlaceholderText
                        style={{
                            fontSize: placehodlerFontSizeAnimation,
                            opacity: placeholderOpacityAnimation,
                        }}
                    >
                        {placeholder}
                    </PlaceholderText>
                </PlaceholderView>
                <LineView
                    pointerEvents="none"
                    style={{
                        width: lineWidthAnimation.interpolate({
                            inputRange: [0, 1],
                            outputRange: ["0%", "100%"],
                        }),
                    }}
                />
            </TextInputView>

            {information && (
                <Ionicons
                    style={{
                        position: "absolute",
                        right: 20,
                    }}
                    name="ios-information-circle-outline"
                    size={30}
                    color="#B09AC7"
                />
            )}

            {description && <DescriptionText>{description}</DescriptionText>}
        </ContainerView>

        //#endregion
    );
};

export default InputField;
