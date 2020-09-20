import styled from 'styled-components/native'

import { colors } from '../../../styles'

export const ContainerView = styled.View`
    flex: 1;
    margin: 7px 0;
    width: 100%;
`

export const HeaderView = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
`

export const TitleText = styled.Text`
    font-family: Poppins_600SemiBold;
    color: ${colors.strongPurple};
    font-size: 24px;

`
