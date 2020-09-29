import React from "react";
import { StyleProp, TextInputProps, ViewStyle } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import {
    ContainerView,
    TextInputView,
    PlaceholderView,
    PlaceholderText,
    MainTextInput,
    DescriptionText,
} from "./styles";

interface InputFieldProps extends TextInputProps {
    password: boolean;
    description?: string;
    information?: string
    style?: StyleProp<ViewStyle>;
}

const InputField: React.FC<InputFieldProps> = ({
    placeholder,
    description,
    information,
    style,
}) => {
    return (
        //#region JSX

        <ContainerView style={style}>
            <TextInputView>
                <MainTextInput />
                <PlaceholderView pointerEvents="none">
                    <PlaceholderText>{placeholder}</PlaceholderText>
                </PlaceholderView>
            </TextInputView>

            {information && <Ionicons
                style={{
                    position: "absolute",
                    right: 20
                }}
                name="ios-information-circle-outline"
                size={30}
                color="#B09AC7"
            />}

            {description && (
                <DescriptionText>100 - 300 palavras</DescriptionText>
            )}
        </ContainerView>

        //#endregion
    );
};

export default InputField;
