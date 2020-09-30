import React, {
    createRef,
    useRef,
    useState,
} from "react";
import {
    Animated,
    StyleProp,
    TextInput,
    TextInputProps,
    ViewStyle,
    TouchableWithoutFeedback
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
    const input = createRef<TextInput>();

    const [focused, setFocused] = useState(false);
    const [hasText, setHasText] = useState(false);

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
        setHasText(value.length !== 0)
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

        <ContainerView style={style}>
            <TextInputView>
                <ContainerTextInput
                    ref={input}
                    onFocus={handleOnFocus}
                    onBlur={handleOnBlur}
                    onChangeText={handleOnChangeText}
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
                <FontAwesome
                    style={{
                        position: "absolute",
                        right: 20,
                    }}
                    name="info-circle"
                    size={30}
                    color="#B09AC7"
                />
            )}

            {focused && (
                <TouchableWithoutFeedback
                    onPress={() => {
                        input.current?.clear()
                        handleOnChangeText('')
                    }}
                >
                    <FontAwesome
                        style={{
                            position: "absolute",
                            right: 53,
                        }}
                        name="close"
                        size={22}
                        color="#B09AC7"
                    />
                </TouchableWithoutFeedback>
            )}

            {description && <DescriptionText>{description}</DescriptionText>}
        </ContainerView>

        //#endregion
    );
};

export default InputField;
