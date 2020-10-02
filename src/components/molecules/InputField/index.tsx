import React, { createRef, useRef, useState } from "react";
import {
    Animated,
    StyleProp,
    TextInput,
    ViewStyle,
    TouchableWithoutFeedback,
    TextInputProps,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import {
    ContainerView,
    TextInputView,
    PlaceholderView,
    PlaceholderText,
    ContainerTextInput,
    LineView,
    IconsView,
    DescriptionText,
} from "./styles";

import InfoBox from "../../atoms/InfoBox";

interface InputFieldProps extends TextInputProps {
    color: string;
    validated: boolean;
    unvalidatedColor?: string;
    multiline?: boolean;
    duration?: number;
    password?: boolean;
    placeholder?: string;
    description?: string;
    information?: string;
    errorMessage?: string;
    style?: StyleProp<ViewStyle>;
}

const InputField: React.FC<InputFieldProps> = ({
    color,
    validated,
    unvalidatedColor = "#FF0000",
    multiline,
    duration = 200,
    password = false,
    placeholder,
    description,
    information,
    errorMessage,
    style,
    ...rest
}) => {
    //#region States

    const input = createRef<TextInput>();

    const [focused, setFocused] = useState(false);
    const [hasText, setHasText] = useState(false);

    const [isShowingInformation, setIsShowingInformation] = useState(false);
    const [isShowingErrorMessage, setIsShowingErrorMessage] = useState(false);

    const textInputPositionAnimation = useRef(new Animated.Value(0)).current;
    const lineWidthAnimation = useRef(new Animated.Value(0)).current;
    const placeholderOpacityAnimation = useRef(new Animated.Value(0.3)).current;
    const placeholderTopAnimation = useRef(new Animated.Value(15)).current;
    const placehodlerFontSizeAnimation = useRef(new Animated.Value(16)).current;

    //#endregion

    //#region Functions

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
        if (isShowingErrorMessage) setIsShowingErrorMessage(false);

        setIsShowingInformation(!isShowingInformation);
    }

    function handleOnPressErrorMessageButton() {
        if (isShowingInformation) setIsShowingInformation(false);

        setIsShowingErrorMessage(!isShowingErrorMessage);
    }

    //#endregion

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

        <ContainerView style={style}>
            <TextInputView>
                <PlaceholderView
                    pointerEvents="none"
                    style={{ top: placeholderTopAnimation }}
                >
                    <PlaceholderText
                        style={{
                            fontSize: placehodlerFontSizeAnimation,
                            opacity: placeholderOpacityAnimation,
                            color:
                                !validated && !focused
                                    ? unvalidatedColor
                                    : color,
                        }}
                    >
                        {placeholder}
                    </PlaceholderText>
                </PlaceholderView>
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
                <IconsView>
                    {errorMessage && !focused && !validated && (
                        <>
                            <TouchableWithoutFeedback
                                onPress={handleOnPressErrorMessageButton}
                            >
                                <MaterialIcons
                                    name="error"
                                    size={30}
                                    color={
                                        isShowingErrorMessage
                                            ? unvalidatedColor
                                            : unvalidatedColor + "65"
                                    }
                                />
                            </TouchableWithoutFeedback>
                            {isShowingErrorMessage && (
                                <InfoBox
                                    style={{
                                        position: "absolute",
                                        right: 62,
                                        zIndex: 10,
                                    }}
                                    color={unvalidatedColor}
                                    text={errorMessage}
                                    minWidth={120}
                                    minHeight={80}
                                    maxWidth={200}
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
                            <MaterialIcons
                                style={{
                                    marginBottom: 3,
                                }}
                                name="close"
                                size={22}
                                color={color + "55"}
                            />
                        </TouchableWithoutFeedback>
                    )}
                    {information && (
                        <>
                            <TouchableWithoutFeedback
                                onPress={handleOnPressInformationButton}
                            >
                                <MaterialCommunityIcons
                                    name="information"
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
                                        right: 32,
                                        bottom: -24,
                                        zIndex: 10,
                                    }}
                                    color={color}
                                    text={information}
                                    maxWidth={270}
                                    minHeight={80}
                                />
                            )}
                        </>
                    )}
                </IconsView>
                <LineView
                    pointerEvents="none"
                    style={{
                        width: lineWidthAnimation.interpolate({
                            inputRange: [0, 1],
                            outputRange: ["0%", "100%"],
                        }),
                        borderBottomColor:
                            focused || !hasText
                                ? color
                                : validated
                                ? color
                                : unvalidatedColor,
                    }}
                />
            </TextInputView>

            {description && <DescriptionText>{description}</DescriptionText>}
        </ContainerView>

        //#endregion
    );
};

export default InputField;
