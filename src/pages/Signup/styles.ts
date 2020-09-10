import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Animated } from 'react-native';

import { Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import { colors } from '../../styles';

export const ContainerSafeAreaView = styled(SafeAreaView)`
    background-color: #fff;
    flex: 1;
    justify-content: center;
`

export const SignupContainer = styled.ScrollView`
    background: #fff;
    flex: 1;
    margin-top: 40px;
    padding-bottom: 40px;
`

export const SignupChoice = styled.View`
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
    padding: 2px;
`

export const CheckboxText = styled.Text`
    color: ${colors.grayPurple};
    font-weight: bold;
    margin-left: 5px;
`

export const ButtonContainer = styled.View`
    width: 100%;
    align-items: center;
    margin-bottom: 40px;
`

export const ExtraFieldsContainer = styled(Animated.View)`
    justify-content: center;
    align-items: center;
    width: 100%;

    margin-top: 5px;
`

export const ContactText = styled.Text`
    font-family: Poppins_600SemiBold;
    color: ${colors.strongPurple};
    font-size: 24px;
`

export const MinusButton = styled.TouchableOpacity`
    position: absolute;
    bottom: 5px;
    left: 7%;

    background: #fff;
`
