import styled from 'styled-components/native';
import { Roboto_700Bold } from '@expo-google-fonts/roboto';

import { colors } from '../../../styles';

const photoSize = 120;

export const ProfileInfoContainer = styled.View`
    position: absolute;
    top: 0;
    left: 0;

    padding-bottom: 10px;
    width: 100%;
    background: #fff;
`

export const ProfileInfoHeader = styled.View`
    flex-direction: row;
    top: 0;
    left: 0;

    background: ${colors.strongPurple};

    height: 70px;
    width: 100%;
`

export const ProfilePhoto = styled.Image`
    height: ${photoSize}px;
    width: ${photoSize}px;

    border-radius: 100px;
    border-width: 2px;
    border-color: ${colors.lighterVividPurple};

    margin-left: 10px;
    margin-top: 10px;
`

export const ProfileName = styled.Text`
    color: #fff;
    font-size: 20px;
    font-family: Roboto_700Bold;

    width: 100%;
`

export const InfoContainer = styled.View`
    flex-direction: row;
`

export const InfoContainerFirst = styled.View`
    justify-content: space-between;

    width: 32%;
    margin: 70px 7px 0px 15px;
`

export const InfoContainerSecond = styled.View`
    width: 60%;
`

export const ProfileStatus = styled.View`
    width: 100%;
    padding: 5px 7px;
    margin-top: 3px;

    justify-content: center;
    align-items: center;

    border-radius: 20px;
    background: ${colors.strongPurple};
`

export const StatusText = styled.Text`
    color: #fff;
    font-family: Roboto_700Bold;
    text-align: center;
`
