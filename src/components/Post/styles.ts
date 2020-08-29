import styled from 'styled-components/native'

import { colors } from '../../styles'

const borderRadius = 50
const textShadow = `0px 0px 1px white`
const boxWidth = 300
const boxHeight = 210

export const PostContainerView = styled.View`
    margin: 0 5px;
    width: ${boxWidth}px;
    height: ${boxHeight}px;
    border-radius: ${borderRadius}px;
    justify-content: space-between;
`

export const PostImage = styled.Image`
    position: absolute;
    width: ${boxWidth}px;
    height: ${boxHeight}px;
    border-radius: ${borderRadius}px;
    overflow: hidden;
`

export const TextsView = styled.View`
    flex: 1;
    background: #00000060;
    border-radius: ${borderRadius}px;
    justify-content: space-between;
    align-items: center;
`

export const ProfileView = styled.View`
    margin-top: 15px;
    margin-left: 15px;
    align-self: flex-start;
    align-items: center;
    justify-content: center;
    flex-direction: row;
`

export const ProfileImage = styled.Image`
    width: 50px;
    height: 50px;
    border-radius: 25px;
`

export const ProfileSimpleView = styled.View`
    margin-left: 8px;
`

export const NameText = styled.Text`
    color: #fff;
    font-size: 16px;
    font-family: Poppins_600SemiBold;
`

export const PublishingDateText = styled.Text`
    color: #fff;
    font-size: 11px;
    font-family: Poppins_400Regular;
`

export const TitleText = styled.Text`
    text-shadow: ${textShadow};
    color: white;
    font-size: 18px;
    font-family: Roboto_700Bold;
    width: 200px;
`

export const FooterView = styled.View`
    width: 70%;
    height: 50px;
    padding: 0 15px;
    border-radius: 15px;
    background: white;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
`

export const CoinsView = styled.View`
    flex-direction: row;
`

export const CoinsText = styled.Text`
    color: ${colors.darkGray};
    font-size: 14px;
    font-family: Poppins_600SemiBold;
    text-align: center;
    text-shadow: ${textShadow};
    margin-left: 7px;
`

// Roboto_400Regular
// Poppins_600SemiBold
// Poppins_400Regular
