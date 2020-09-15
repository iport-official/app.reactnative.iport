import styled from 'styled-components/native';

import { Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import { colors } from '../../styles';

export const AuthSwitchContainer = styled.View`
    background-color: ${colors.vividPurple};

    width: 100%;
    height: 100px;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`

export const AuthSwitchText = styled.Text`
    color: ${(props: {isActive?: boolean}) => props.isActive ? '#fff' : '#fff5'};
    font-size: ${(props: {isActive?: boolean}) => props.isActive ? '24px' : '20px'};
    font-family: Poppins_600SemiBold;
`
