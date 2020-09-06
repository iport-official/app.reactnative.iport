import React, { useState } from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';

import { ButtonStyle, ButtonText } from './styles';
import { colors } from '../../styles';

interface ButtonProperties extends RectButtonProperties {
    label: string,
    color: string,
    disableColor: string,
    ripple: string,
    disable?: boolean,
    buttonWidth?: number,
    buttonHeight?: number
}

const FormButton: React.FC<ButtonProperties> = ({
    label,
    color,
    disableColor,
    ripple,
    disable,
    buttonWidth,
    buttonHeight,
    ...rest }) => {
    return (
        <ButtonStyle
            enabled={!disable}
            style={{ backgroundColor: disable ?  disableColor : color,
                width: buttonWidth || 220, height: buttonHeight || 50 }}
            rippleColor={ripple} { ...rest } >
            <ButtonText>{ label }</ButtonText>
        </ButtonStyle>
    )
}

export default FormButton;
