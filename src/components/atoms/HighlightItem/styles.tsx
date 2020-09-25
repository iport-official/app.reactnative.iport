import styled from 'styled-components/native';
import { Roboto_700Bold } from '@expo-google-fonts/roboto';

import { colors } from '../../../styles';

export const HighlightItemContainer = styled.View`
    align-items: center;

    height: 130px;
    width: 100px;
    margin-bottom: 20px;
`

export const HighlightTitleContainer = styled.View`
    width: 100%;
    height: 30px;

    padding: 5px 10px;

    justify-content: center;
    align-items: center;
`

export const HighlightTitle = styled.Text`
    width: 130%;
    text-align: center;
    font-family: Roboto_700Bold;
    font-size: 16px;
`

export const HighlightContentContainer = styled.View`
    justify-content: center;
    align-items: center;
    overflow: hidden;

    border-radius: 15px;
    background: #888;

    height: 100px;
    width: 100px;
`
