import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';

import { ButtonStyle, ButtonText } from './styles';

interface ButtonProperties extends RectButtonProperties {
    label: string;
    color: string;
    disableColor: string;
    ripple: string;
    disable?: boolean;
    buttonWidth?: number;
    buttonHeight?: number;
    buttonBorderRadius?: number;
}

const FormButton: React.FC<ButtonProperties> = ({
    label,
    color,
    disableColor,
    ripple,
    disable,
    buttonWidth = 220,
    buttonHeight = 50,
    buttonBorderRadius = 8,
    ...rest
}: ButtonProperties) => {
    return (
        <ButtonStyle
            enabled={!disable}
            style={{ backgroundColor: disable ?  disableColor : color,
                width: buttonWidth, height: buttonHeight, borderRadius: buttonBorderRadius }}
            rippleColor={ripple} { ...rest } >
            <ButtonText>{ label }</ButtonText>
        </ButtonStyle>
    )
}

export default FormButton;
