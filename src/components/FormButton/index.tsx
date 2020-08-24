import React, { useState } from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';

import { ButtonStyle, ButtonText } from './styles';
import { colors } from '../../styles';

interface ButtonProperties extends RectButtonProperties {
    label: string,
    color: string,
    disableColor: string,
    ripple: string
}

const FormButton: React.FC<ButtonProperties> = ({ label, color, disableColor, ripple, ...rest }) => {

    const [isPressed, setPressed] = useState(false);
    const disable = false;

    return (
        <ButtonStyle onPress={() => setPressed(true)} enabled={!disable}
            style={{ backgroundColor: disable ?  disableColor : color }}
            rippleColor={ripple} { ...rest } >
            <ButtonText>{ label }</ButtonText>
        </ButtonStyle>
    )
}

export default FormButton;
