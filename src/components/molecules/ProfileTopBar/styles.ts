import { Roboto_700Bold } from '@expo-google-fonts/roboto';
import styled from 'styled-components/native';

export const ProfileTopBarContainer = styled.View`
    position: absolute;
    top: 10px;

    flex-direction: row;
    align-items: center;

    width: 95%;
    height: 60px;

    border-radius: 12px;
    background-color: #46266c;
`

export const ArrowIconContainer = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;

    width: 60px;
    height: 100%;
`

export const VerticalLine = styled.View`
    width: 1px;
    height: 50%;

    background-color: rgba(255, 255, 255, 0.5);
`

export const TopBarTitle = styled.Text`
    color: #fff;
    font-family: Roboto_700Bold;
    font-size: 22px;

    flex: 1;
    margin-left: 15px;
`

export const TopBarIcon = styled.View`
    justify-content: center;
    align-items: center;

    margin-right: 10px;
`
