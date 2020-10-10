import { KeyboardAvoidingView } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'
import InputField from '../../components/molecules/InputField'
import { colors } from '../../styles'

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
    right: 30px;
    background: ${colors.livePurple};
    padding: 10px 10px;
`

export const ButtonText = styled.Text`
    color: #fff;
`

export const ContainerScrollView = styled.ScrollView`
    flex: 1;
    margin-bottom: 20px;
`

export const ImagePickerView = styled.View`
    background: gray;
    height: 250px;
`

export const InputFieldStyled = styled(InputField)`
    margin-top: 20px;
`
