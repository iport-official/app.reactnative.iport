import styled from 'styled-components/native';
import { Animated } from 'react-native';

import { colors } from '../../../styles';
import AnimatedTouchable from '../../animated/AnimatedTouchable';
import AnimatedTextInput from '../../animated/AnimatedTextInput';

export const FullScreenView = styled(Animated.View)`
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
`

export const TouchableArea = styled(AnimatedTouchable)`
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 40px;
`

export const ArrowIcon = styled(Animated.Image)`
    position: absolute;
    width: 20px;
    height: 13px;
`

export const SearchBox = styled(AnimatedTextInput)`
    border-bottom-width: 1px;
    border-bottom-color: #fff;
    border-radius: 7px;

    height: 40px;
    margin-left: 20px;
    margin-top: 10px;

    color: #fff;
    font-size: 18px;

`

export const SearchIcon = styled(AnimatedTouchable)`
    position: absolute;
    margin-top: 50px;
    width: 40%;
    height: 40px;
    justify-content: center;
`

export const Overlay = styled(Animated.View)`
    flex: 1;
    background-color: #0007;
`

export const ContainerFooterView = styled(Animated.View)`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 40px;
    background-color: ${colors.vividPurple};
    align-items: center;
`
