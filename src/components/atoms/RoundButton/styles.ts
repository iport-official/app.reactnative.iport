import styled from 'styled-components/native';
import { Animated } from 'react-native';

const size = 60;

export const ButtonContainer = styled(Animated.View)`
    justify-content: center;
    align-items: center;

    height: ${size}px;
    width: ${size}px;
    margin-top: 10px;

    border-radius: ${size * 2}px;
`
