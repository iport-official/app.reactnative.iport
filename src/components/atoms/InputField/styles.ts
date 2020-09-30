import { Animated } from 'react-native'
import styled from 'styled-components/native'

import AnimatedTextInput from '../../animated/AnimatedTextInput'

import { colors } from '../../../styles'

const paddingHorizontal = 20
const height = 55
const width = 350

export const ContainerView = styled.View``

export const TextInputView = styled.View`
    width: ${width}px;
    background: #fff;
    border-radius: 8px;
    min-height: ${height}px;
    max-height: 150px;
    justify-content: center;
    padding: 15px ${paddingHorizontal}px;
`

export const PlaceholderView = styled(Animated.View)`
    position: absolute;
    left: ${paddingHorizontal}px;
`

export const PlaceholderText = styled(Animated.Text)`
    color: ${colors.livePurple};
    opacity: 0.3;
    font-size: 16px;
    font-family: Roboto_700Bold;
`

export const ContainerTextInput = styled(AnimatedTextInput)`
    padding-right: ${paddingHorizontal + 30}px;
    font-size: 14px;
    font-family: Roboto_400Regular;
`

export const LineView = styled(Animated.View)`
    position: absolute;
    width: 100%;
    bottom: 0;
    left: ${paddingHorizontal}px;
    right:  ${paddingHorizontal}px;
    border-bottom-width: 3px;
    border-bottom-color: ${colors.livePurple};
`

export const DescriptionText = styled.Text`
    width: ${width}px;
    padding: 10px ${paddingHorizontal / 2}px;
    opacity: 0.3;
    color: ${colors.livePurple};
    font-family: Roboto_400Regular;
`
