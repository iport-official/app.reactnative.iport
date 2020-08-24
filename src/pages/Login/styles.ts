import styled from 'styled-components/native';
import { colors } from '../../styles';

export const LoginContainer = styled.View`
    flex: 1;
    background-color: #fff;
    justify-content: center;
    align-items: center;
`

export const LoginLogo = styled.Image`
    height: 150px;
    width: 150px;
    margin-bottom: 50px;
`

export const LoginFooter = styled.View`
    width: 75%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const CheckboxContainer = styled.View`
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`

export const CheckboxText = styled.Text`
    color: ${colors.grayPurple};
    font-weight: bold;
    margin-left: 5px;
`

export const ForgotPassword = styled.Text`
    color: ${colors.grayPurple};
    font-weight: bold;
`
