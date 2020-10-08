import { Roboto_700Bold, Roboto_400Regular } from '@expo-google-fonts/roboto';
import styled from 'styled-components/native';

import { colors } from '../../../styles';

export const HighlightContentContainer = styled.View`
    flex: 1;
`

export const HighlightContent = styled.ScrollView`
    flex: 1;
`

export const ContentContainer = styled.View`
    margin: 0 20px;
`

export const ContentImage = styled.Image`
    height: 200px;
    width: 100%;
    margin-bottom: 15px;

    border-radius: 15px;
`

export const ContentTitleContainer = styled.View`
    flex-direction: row;
    align-items: center;
    margin: 0 5px;
    margin-bottom: 10px;
`

export const ContentTitle = styled.Text`
    color: ${colors.strongPurple};
    font-family: Roboto_700Bold;
    font-size: 20px;
`

export const ContentVerticalLine = styled.View`
    height: 90%;
    width: 1px;
    background-color: #90909088;
    margin: 0 5px;
`

export const ContentDateContainer = styled.View`
    align-items: flex-end;
`

export const ContentDate = styled.Text`
    color: #909090;
    font-size: 13px;
`

export const ContentDescription = styled.Text`
    font-family: Roboto_400Regular;
    font-size: 16px;

    text-align: justify;
`

export const ContentHorizontalLine = styled.View`
    width: 100%;
    height: 1px;
    background-color: #90909088;
    margin: 15px 0;
`
