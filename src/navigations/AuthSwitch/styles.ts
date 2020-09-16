import styled from 'styled-components/native';

import { Poppins_600SemiBold } from '@expo-google-fonts/poppins';

export const AuthSwitchText = styled.Text`
    width: 100px;
    text-align: center;
    color: ${(props: {isActive?: boolean}) => props.isActive ? '#fff' : '#fff5'};
    font-size: ${(props: {isActive?: boolean}) => props.isActive ? '24px' : '20px'};
    font-family: Poppins_600SemiBold;
`
