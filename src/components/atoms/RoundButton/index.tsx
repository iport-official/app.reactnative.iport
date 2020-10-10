import React from "react";
import { Animated, View, ViewProps } from "react-native";

import { ContainerView, LabelView, LabelText, ButtonContainer } from "./styles";

interface RoundButtonProps extends ViewProps {
    label?: string;
    bgColor?: string;
    transform?: Animated.Value | number;
    opacity?: Animated.Value | number;
    spin?: Animated.AnimatedInterpolation | string;
    icon?(): JSX.Element | null;
    onPress?(): void;
}

const RoundButton: React.FC<RoundButtonProps> = ({
    label,
    bgColor = '#46266c',
    transform = 0,
    opacity = 1,
    spin = '0deg',
    icon,
    onPress,
    ...rest
}: RoundButtonProps) => {
    return (
        <ContainerView {...rest} >
            {label && (
                <LabelView>
                    <LabelText>{label}</LabelText>
                </LabelView>
            )}
            <ButtonContainer
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
