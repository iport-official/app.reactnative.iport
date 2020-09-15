import styled from 'styled-components/native';

import { colors } from '../../../styles';

const borderRadius = 50;
const textShadow = `0px 0px 1px white`;

const isNotMainBoxHeight = 210;
const isNotMainBoxWidth = 300;

const isMainBoxHeight = 300;

export const PostContainerView = styled.View`
    width: ${(props:  { isMain?: boolean }) => props.isMain
        ? "94.5%"
        : isNotMainBoxWidth + "px"};
    height: ${(props:  { isMain?: boolean }) => props.isMain
        ? isMainBoxHeight
        : isNotMainBoxHeight}px;
    border-radius: ${borderRadius}px;
    justify-content: space-between;
    margin: 0 10px;
    margin-top: ${(props: { isMain?: boolean }) => props.isMain
        ? '20px' : '0' };
    margin-bottom: ${(props: { isMain?: boolean }) => props.isMain
        ? '0' : '20px' };
`

export const PostShadow = styled.View`
    width: 101%;
    height: ${(props: { isMain?: boolean }) => props.isMain
        ? '101%' : '101.5%'};
    background: #8883;
    border-radius: ${borderRadius}px;
    position: absolute;
    z-index: -1;
`

export const PostImage = styled.Image`
    position: absolute;
    width: ${(props:  { isMain?: boolean }) => props.isMain
        ? "100%"
        : isNotMainBoxWidth + "px"};
    height: ${(props:  { isMain?: boolean }) => props.isMain
        ? isMainBoxHeight
        : isNotMainBoxHeight}px;
    border-radius: ${borderRadius}px;
    overflow: hidden;
`

export const PostContentView = styled.View`
    flex: 1;
    background: #00000060;
    border-radius: ${borderRadius}px;
    justify-content: space-between;
    align-items: center;
    border: 4px solid ${colors.strongPurple}aa;
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

export const TextsView = styled.View`
    flex: 1;
    justify-content: center;
    margin: 0 ${(props: { isMain?: boolean }) => props.isMain
        ? 50
        : 0}px;
`

export const TitleText = styled.Text`
    text-shadow: ${textShadow};
    color: #fff;
    font-size: ${(props: { isMain?: boolean }) => props.isMain
        ? 25
        : 18}px;
    font-family: Roboto_700Bold;
    width: ${(props: { isMain?: boolean }) => props.isMain
        ? 300
        : 200}px;
`

export const DescriptionText = styled.Text`
    color: #fff;
    margin-top: 10px;
`

export const FooterView = styled.View`
    width: 215px;
    height: 50px;
    padding: 0 15px;
    margin-bottom: 2px;
    border-radius: 15px;
    background: #fff;
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
