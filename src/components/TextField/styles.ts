import { Animated } from 'react-native';
import styled from 'styled-components/native';

import { colors } from '../../styles';
import AnimatedTextInput from './AnimatedTextInput';

export const TextFieldStyle = styled.View`
    background-color: ${colors.transparent};
    width: 80%;
    height: 54px;
    border: 1px;
    border-color: ${colors.lightPurple}80;
    border-style: solid;
    border-radius: 8px;
    padding: 0 10px;
    margin-bottom: 15px;
`

export const TextFieldPlaceholder = styled(Animated.Text)`
    position: absolute;
    color: ${colors.lightPurple}80;
    font-size: 16px;
    left: 16px;
    top: 15px;
`

export const TextFieldInputStyle = styled(AnimatedTextInput)`
    position: absolute;
    border-bottom-width: 3px;
    border-bottom-color: ${colors.grayPurple};
    border-style: solid;
    width: 95%;
    padding-bottom: 5px;
    align-self: center;
    bottom: 0px;
`
