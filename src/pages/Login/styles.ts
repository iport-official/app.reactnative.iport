import { Animated } from 'react-native';
import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context'

import { colors } from '../../styles';

export const ContainerSafeAreaView = styled(SafeAreaView)`
    background-color: #fff;
    flex: 1;
    justify-content: center;
`

export const LoginContainer = styled(Animated.View)`
    flex: 1;
    background-color: #fff;
    justify-content: center;
    align-items: center;
    padding-bottom: 20px;
`

export const LoginLogo = styled(Animated.Image)`
    height: 150px;
    width: 150px;
    margin-bottom: 20px;
`

export const LoginFooter = styled.View`
    width: 75%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 10px;
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
