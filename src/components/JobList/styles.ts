import styled from 'styled-components/native'

import { colors } from '../../styles'

export const ContainerView = styled.View`
    flex: 1;
    border-bottom-color: ${colors.ligherPurple};
    border-bottom-width: 3px;
    padding: 10px 10px 10px 10px;
`

export const TitleText = styled.Text`
    font-family: Poppins_600SemiBold;
    font-size: 23px;
    color: ${colors.grayPurple};
`

export const ContainerScrollView = styled.ScrollView`
    flex: 1;
    flex-direction: row;
`
