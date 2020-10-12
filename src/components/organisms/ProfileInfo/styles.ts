// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Roboto_700Bold } from '@expo-google-fonts/roboto';

import { colors } from '../../../styles';

import styled from 'styled-components/native';

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

export const ProfilePhotoContainer = styled.View`
    position: absolute;
    top: 60px;

    align-items: center;

    width: 100%;
`

export const ProfilePhoto = styled.Image`
    height: ${photoSize}px;
    width: ${photoSize}px;

    margin-bottom: 20px;

    border-radius: ${photoSize * 2}px;
`

export const ProfilePhotoBackground = styled.View`
    position: absolute;
    height: ${photoSize + 10}px;
    width: ${photoSize + 10}px;

    bottom: 15px;

    border-radius: 200px;
    border-width: 10px;
    border-color: #fff;
`

export const ProfilePhotoEmpty = styled.View`
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    top: -20px;

    height: 180px;
    width: 180px;
    border-radius: 300px;

    background: #aaa;
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

export const ModalContainer = styled.TouchableOpacity`
    position: absolute;
    height: 100%;
    width: 100%;

    background: #0002;
`

export const ModalContent = styled.View`
    top: 50%;
    left: 10%;

    justify-content: center;
    align-items: center;
    width: 80%;

    padding: 10px 15px;
    border-radius: 20px;

    background: #fff;
`

export const InfoEndLine = styled.View`
    height: 1px;
    width: 100%;
    background: #aaa2;

    margin-top: 15px;
`
