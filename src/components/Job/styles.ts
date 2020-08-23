import styled from 'styled-components/native'

import { colors } from '../../styles'

export const ContainerView = styled.View`
    width: 250px;
`

export const EnterpriseImage = styled.Image`
    height: 150px;
    width: 250px;
    border-radius: 15px;
`

export const TextsView = styled.View`
    padding-left: 10px;
`

export const TitleText = styled.Text`
    margin-top: 5px;
    color: ${colors.grayPurple};
    font-size: 20px;
    font-family: Poppins_400Regular;
`

export const DescriptionText = styled.Text`
    margin-top: 5px;
    color: ${colors.grayPurple};
    font-size: 14px;
    font-family: Poppins_400Regular;
`

export const PublishingDateText = styled.Text`
    margin: 5px 0;
    color: ${colors.grayPurple};
    font-size: 14px;
    font-family: Poppins_400Regular;
`
