import styled from 'styled-components/native'

import { colors } from '../../../styles'

export const ContainerView = styled.View`
    margin: 0 5px;
    justify-content: center;
    flex-direction: row;
    overflow: hidden;
    background-color: ${colors.darkGray};
    padding: 0 15px;
    border-radius: 30px;
`

export const CategoryNameText = styled.Text`
    color: #fff;
    font-family: Roboto_400Regular;
    align-self: center;
`

export const BorderBottomView = styled.View`
    position: absolute;
    align-self: flex-end;
    border-radius: 8px;
    width: 80%;
    border-bottom-width: 4px;
    border-bottom-color: ${colors.lighterVividPurple};
`
