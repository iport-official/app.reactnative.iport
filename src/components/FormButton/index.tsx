import React, { useState } from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';

import { ButtonStyle, ButtonText } from './styles';
import { colors } from '../../styles';

interface ButtonProperties extends RectButtonProperties {
    label: string,
    color: string,
    disableColor: string,
    ripple: string,
    disable?: boolean
}

const FormButton: React.FC<ButtonProperties> = ({ label, color, disableColor, ripple, disable, ...rest }) => {
    return (
        <ButtonStyle
            enabled={!disable}
            style={{ backgroundColor: disable ?  disableColor : color }}
            rippleColor={ripple} { ...rest } >
            <ButtonText>{ label }</ButtonText>
        </ButtonStyle>
    )
}

export default FormButton;
