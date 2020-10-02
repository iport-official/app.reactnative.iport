import React from "react";
import { View, Text, ViewProps } from "react-native";

import { ContainerView, LabelView, LabelText, ButtonContainer } from "./styles";

interface RoundButtonProps extends ViewProps {
    label?: string;
    bgColor?: string;
    transform?: any;
    opacity?: any;
    spin?: any;
    icon?(): any | null;
    onPress?(): any;
}

const RoundButton: React.FC<RoundButtonProps> = ({
    label,
    bgColor = "#46266c",
    transform = 0,
    opacity = 1,
    spin = "0deg",
    icon,
    onPress,
    ...rest
}) => {
    return (
        <ContainerView>
            {label && (
                <LabelView>
                    <LabelText>{label}</LabelText>
                </LabelView>
            )}
            <ButtonContainer
                {...rest}
                style={{
                    backgroundColor: bgColor,
                    transform: [{ translateY: transform, rotate: spin }],
                    opacity: opacity,
                }}
                onTouchStart={() => {
                    if (onPress) onPress();
                }}
            >
                {icon ? icon() : <View />}
            </ButtonContainer>
        </ContainerView>
    );
};

export default RoundButton;
