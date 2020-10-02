import styled from 'styled-components/native';
import { Animated } from 'react-native';
import { colors } from '../../../styles';
import { Roboto_400Regular } from '@expo-google-fonts/roboto';

const size = 60;

export const ContainerView = styled.View`
    flex-direction: row;
    align-items: center;
`

export const LabelView = styled.View`
    background: ${colors.darkGray};
    padding: 4px 20px;
    border-radius: 10px;
    margin-right: 10px;
`

export const LabelText = styled.Text`
    font-family: Roboto_400Regular;
    font-size: 12px;
    color: #fff;
`

export const ButtonContainer = styled(Animated.View)`
    justify-content: center;
    align-items: center;

    height: ${size}px;
    width: ${size}px;
    margin-top: 10px;

    border-radius: ${size * 2}px;
`

// Roboto_400Regular
