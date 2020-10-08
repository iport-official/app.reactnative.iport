import styled from 'styled-components/native';
import { Roboto_700Bold } from '@expo-google-fonts/roboto';

import { colors } from '../../../styles';

const size = 140;

export const HighlightItemContainer = styled.View`
    align-items: center;

    height: ${size + 30}px;
    width: ${size}px;
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
    font-size: 18px;
`

export const HighlightContentContainer = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    overflow: hidden;

    border-radius: 15px;
    background: #888;

    height: ${size}px;
    width: ${size}px;
`
