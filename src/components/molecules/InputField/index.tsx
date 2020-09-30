import React, { createRef, useRef, useState } from "react";
import {
    Animated,
    StyleProp,
    TextInput,
    ViewStyle,
    TouchableWithoutFeedback,
    TextInputProps,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import {
    ContainerView,
    TextInputView,
    PlaceholderView,
    PlaceholderText,
    ContainerTextInput,
    LineView,
    DescriptionText,
} from "./styles";

import InfoBox from "../../atoms/InfoBox";

interface InputFieldProps extends TextInputProps {
    color: string;
    wrongColor?: string
    multiline?: boolean;
    duration?: number;
    password?: boolean;
    placeholder?: string;
    description?: string;
    information?: string;
    style?: StyleProp<ViewStyle>;
}

const InputField: React.FC<InputFieldProps> = ({
    color,
    wrongColor = "#FF0000",
    multiline,
    duration = 200,
    password = false,
    placeholder,
    description,
    information,
    style,
    ...rest
}) => {
    const input = createRef<TextInput>();

    const [] = useState(0);
    const [focused, setFocused] = useState(false);
    const [hasText, setHasText] = useState(false);

    const [isShowingInformation, setIsShowingInformation] = useState(false);
    const [wrong] = useState(false);

    const textInputPositionAnimation = useRef(new Animated.Value(0)).current;
    const lineWidthAnimation = useRef(new Animated.Value(0)).current;
    const placeholderOpacityAnimation = useRef(new Animated.Value(0.3)).current;
    const placeholderTopAnimation = useRef(new Animated.Value(15)).current;
    const placehodlerFontSizeAnimation = useRef(new Animated.Value(16)).current;

    function handleOnFocus() {
        setFocused(true);
        playAnimation(true);
    }

    function handleOnBlur() {
        setFocused(false);
        if (hasText) return;

        playAnimation(false);
    }

    function handleOnChangeText(value: string) {
        setHasText(value.length !== 0);
    }

    function handleOnPressInformationButton() {
        setIsShowingInformation(!isShowingInformation);
    }

    //#region Animations

    function playAnimation(value: boolean) {
        if (value) {
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
        } else {
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
    }

    //#endregion

    return (
        //#region JSX

        <ContainerView>
            <TextInputView
                style={{
                    borderWidth: wrong ? 2 : 0,
                    borderColor: wrong ? wrongColor : "#fff",
                }}
            >
                <ContainerTextInput
                    ref={input}
                    multiline={multiline}
                    onFocus={handleOnFocus}
                    onBlur={handleOnBlur}
                    onChangeText={handleOnChangeText}
                    style={{
                        transform: [{ translateY: textInputPositionAnimation }],
                    }}
                    {...rest}
                />
                <PlaceholderView
                    pointerEvents="none"
                    style={{ top: placeholderTopAnimation }}
                >
                    <PlaceholderText
                        style={{
                            fontSize: placehodlerFontSizeAnimation,
                            opacity: placeholderOpacityAnimation,
                            color: wrong ? wrongColor : color,
                        }}
                    >
                        {placeholder}
                    </PlaceholderText>
                </PlaceholderView>
                {!wrong && (
                    <LineView
                        pointerEvents="none"
                        style={{
                            width: lineWidthAnimation.interpolate({
                                inputRange: [0, 1],
                                outputRange: ["0%", "100%"],
                            }),
                        }}
                    />
                )}
                {information && (
                    <>
                        <TouchableWithoutFeedback
                            onPress={handleOnPressInformationButton}
                        >
                            <FontAwesome
                                style={{
                                    position: "absolute",
                                    right: 18,
                                    bottom: 12,
                                }}
                                name="info-circle"
                                size={30}
                                color={
                                    isShowingInformation
                                        ? color
                                        : color + "55"
                                }
                            />
                        </TouchableWithoutFeedback>
                        {isShowingInformation && (
                            <InfoBox
                                style={{
                                    position: "absolute",
                                    right: 48,
                                    zIndex: 10,
                                }}
                                color={color}
                                text={information}
                                maxWidth={270}
                            />
                        )}
                    </>
                )}

                {focused && (
                    <TouchableWithoutFeedback
                        onPress={() => {
                            input.current?.clear();
                            handleOnChangeText("");
                        }}
                    >
                        <FontAwesome
                            style={{
                                position: "absolute",
                                right: 50,
                                bottom: 17,
                            }}
                            name="close"
                            size={22}
                            color="#B09AC7"
                        />
                    </TouchableWithoutFeedback>
                )}
            </TextInputView>

            {description && <DescriptionText>{description}</DescriptionText>}
        </ContainerView>

        //#endregion
    );
};

export default InputField;
