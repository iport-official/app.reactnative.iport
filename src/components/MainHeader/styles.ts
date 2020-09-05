import { Roboto_700Bold } from '@expo-google-fonts/roboto';
import { Poppins_600SemiBold } from '@expo-google-fonts/poppins';
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
    font-family: Roboto_700Bold;
    font-size: 18px;
    color: #fff;
    margin-right: 5px;
`
