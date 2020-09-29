import { Animated } from 'react-native'
import styled from 'styled-components/native'

import { colors } from '../../../styles'

const paddingHorizontal = 20
const height = 55
const width = 350

export const ContainerView = styled.View`
    width: ${width}px;
    height: ${height}px;
    padding: 0 ${paddingHorizontal}px;
    border-radius: 8px;
    background: #fff;
    flex-direction: row;
    align-items: center;
`

export const TextInputView = styled.View`
    flex: 1;
    height: 100%;
    flex-direction: row;
    align-items: center;
`

export const PlaceholderView = styled.View`
    position: absolute;
`

export const PlaceholderText = styled(Animated.Text)`
    color: ${colors.livePurple};
    opacity: 0.3;
    font-size: 16px;
    font-family: Roboto_700Bold;
`

export const MainTextInput = styled.TextInput`
    flex: 1;
    height: 100%;
    padding: 0;
    font-family: Roboto_400Regular;
    border-bottom-width: 3px;
    border-bottom-color: ${colors.livePurple};
`

export const DescriptionText = styled.Text`
    position: absolute;
    top: ${height + 5}px;
    left: ${paddingHorizontal - 10}px;
    color: ${colors.livePurple};
    opacity: 0.3;
    font-family: Roboto_400Regular;
`

// Roboto_400Regular
// Roboto_700Bold
