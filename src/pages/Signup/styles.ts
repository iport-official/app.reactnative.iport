import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Animated } from 'react-native';

export const ContainerSafeAreaView = styled(SafeAreaView)`
    background-color: #fff;
    flex: 1;
    justify-content: center;
    padding: 0 25px;
`

export const SignupContainer = styled.ScrollView`
    background: #fff;
    flex: 1;
    padding-top: 40px;
    padding-bottom: 40px;
`

export const SignupChoice = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 7px 0;
`

export const ButtonContainerView = styled.View`
    margin-top: ${(props: {checked: boolean}) => props.checked
        ? 0
        : 100}px;
    margin-bottom:${(props: {checked: boolean}) => props.checked
        ? 80
        : 0}px;
    width: 100%;
    align-items: center;
`

export const ExtraFieldsContainer = styled(Animated.View)`
    justify-content: center;
    align-items: center;
    width: 100%;

    margin-top: 5px;
`
