import { Feather } from '@expo/vector-icons';
import { Animated } from 'react-native';
import styled from 'styled-components/native';

import { colors } from '../../../styles';
import AnimatedTextInput from '../../animated/AnimatedTextInput';

export const TextFieldStyle = styled.View`
    background-color: ${colors.transparent};
    height: 54px;
    border: 1px solid ${colors.lightPurple}80;
    border-radius: 8px;
    padding: 0 10px;
    margin: 7px 0;
    justify-content: center;
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
    padding-bottom: 5px;
    left: 16px;
    bottom: 0px;
`

export const PasswordIcon = styled(Feather)`
    position: absolute;
    align-self: flex-end;
    right: 15px;
`
