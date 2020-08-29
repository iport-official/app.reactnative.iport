import styled from 'styled-components/native'

import { colors } from '../../styles'
import { Roboto_700Bold } from '@expo-google-fonts/roboto'

export const ContainerView = styled.View`
    flex: 1;
    border-bottom-color: ${colors.ligherPurple};
    border-bottom-width: 3px;
    padding: 10px 10px 10px 10px;
`

export const TitleText = styled.Text`
    font-family: Roboto_700Bold;
    text-shadow: 0px 0px 4px #00000080;
    font-size: 20px;
    text-align: center;
    color: black;
    margin-bottom: 15px;
`

export const ContainerScrollView = styled.ScrollView`
    flex: 1;
    flex-direction: row;
`
