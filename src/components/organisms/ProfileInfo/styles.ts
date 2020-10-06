import styled from 'styled-components/native';
import { Roboto_700Bold } from '@expo-google-fonts/roboto';

import { colors } from '../../../styles';

const photoSize = 180;

export const ProfileInfoContainer = styled.View`
    top: 0;
    left: 0;

    z-index: 5;
    width: 100%;
    background: #fff;
`

export const ProfileInfoHeader = styled.View`
    align-items: center;
    top: 0;
    left: 0;

    border-radius: 20px;
    background: ${colors.strongPurple};

    height: 150px;
    width: 100%;
`

export const ProfilePhoto = styled.Image`
    height: ${photoSize}px;
    width: ${photoSize}px;

    margin-top: 60px;
    border-radius: 200px;
`

export const ProfilePhotoBackground = styled.View`
    position: absolute;
    height: ${photoSize + 10}px;
    width: ${photoSize + 10}px;

    margin-top: 55px;

    border-radius: 200px;
    border-width: 10px;
    border-color: #fff;
`

export const InfoContainer = styled.View`
    align-items: center;
    margin-top: 105px;
`

export const ProfileName = styled.Text`
    color: #222;
    font-size: 22px;
    font-family: Roboto_700Bold;
`

export const ProfileStatus = styled.View`
    width: 80%;
    padding: 8px 10px;
    margin-top: 15px;

    justify-content: center;
    align-items: center;

    border-radius: 20px;
    border: 1px #8884;
`

export const StatusText = styled.Text`
    color: #222;
    font-family: Roboto_700Bold;
    font-size: 16px;
    text-align: center;
`

export const InfoEndLine = styled.View`
    height: 1px;
    width: 100%;
    background: #aaa2;

    margin-top: 15px;
`
