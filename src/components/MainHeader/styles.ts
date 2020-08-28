import styled from 'styled-components/native'

import { colors } from '../../styles'

export const ContainerHeaderView = styled.View`
    height: 70px;
    background-color: ${colors.vividPurple};
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
`

export const ContainerPortCoins = styled.View`
    flex-direction: row;
    align-items: center;
`

export const PortCoinsCounter = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: ${colors.lighterVividPurple};
    text-shadow: 0px 0px 4px #0008;
    margin-right: 5px;
`

export const PortCoinsSymbol = styled.Image`
    height: 36px;
    width: 36px;
`
