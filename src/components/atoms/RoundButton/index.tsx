import React from 'react';
import { View, ViewProps } from 'react-native';

import { ButtonContainer } from './styles';

interface RoundButtonProps extends ViewProps {
    bgColor?: string;
    transform?: any;
    opacity?: any;
    spin?: any;
    icon?(): any | null;
    onPress?(): any;
}

const RoundButton: React.FC<RoundButtonProps> = ({
    bgColor = '#46266c',
    transform = 0,
    opacity = 1,
    spin = '0deg',
    icon,
    onPress,
    ...rest
}) => {

    return (
        <ButtonContainer
            { ...rest }
            style={{ backgroundColor: bgColor, transform: [{ translateY: transform, rotate: spin }], opacity: opacity }}
            onTouchStart={() => { if(onPress) onPress() }} >
            { icon ? icon() : <View /> }
        </ButtonContainer>
    )
}

export default RoundButton;
