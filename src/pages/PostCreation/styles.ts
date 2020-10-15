import { KeyboardAvoidingView } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'

import { colors } from '../../styles'

import InputField from '../../components/molecules/InputField'
import styled from 'styled-components/native'

export const ContainerSafeAreaView = styled(SafeAreaView)`
    flex: 1;
    background: #fff;
`

export const ContainerKeyboardAvoidView = styled(KeyboardAvoidingView)`
    flex: 1;
    justify-content: center;
`

export const HeaderView = styled.View`
    height: 60px;
    justify-content: center;
    align-items: center;
`

export const TitleText = styled.Text`
    text-align: center;
    color: #303030;
    font-size: 17px;
    font-family: Roboto_700Bold;
`

export const ContainerRectButton = styled(RectButton)`
    position: absolute;
    right: 10px;
    background: ${colors.strongPurple};
    border-radius: 10px;
    padding: 10px 10px;
`

export const ButtonText = styled.Text`
    color: #fff;
`

export const ContainerScrollView = styled.ScrollView`
    flex: 1;
    margin-bottom: 20px;
`

export const ContainerContentView = styled.View`
    width: 330px;
`

export const ImagePickerView = styled.View`
    background: gray;
    height: 250px;
`

export const InputFieldStyled = styled(InputField)`
    margin-top: 20px;
`
