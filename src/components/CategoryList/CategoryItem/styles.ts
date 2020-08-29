import styled from 'styled-components/native'

import { colors } from '../../../styles'

export const ContainerView = styled.View`
    margin: 0 10px;
    justify-content: center;
    flex-direction: row;
    overflow: hidden;
`

export const CategoryNameText = styled.Text`
    color: #fff;
    font-family: Roboto_400Regular;
    align-self: center;
`

export const BorderBottomView = styled.View`
    position: absolute;
    align-self: flex-end;
    width: 80%;
    border-bottom-width: 4px;
    border-bottom-color: ${colors.lighterVividPurple};
`

// Roboto_700Bold
// Roboto_400Regular
