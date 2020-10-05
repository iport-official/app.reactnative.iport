import { Roboto_700Bold } from '@expo-google-fonts/roboto';
import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const ContainerSafeAreaView = styled(SafeAreaView)`
    flex: 1;
`

export const ContainerKeyboardAvoidView = styled.View`
    flex: 1;
`

export const ContentView = styled.ScrollView`
    flex: 1;
    background: #fff;

    border: 5px #fff;
`

export const ModalContainer = styled.TouchableOpacity`
    position: absolute;
    height: 100%;
    width: 100%;

    background: #0006;
`

export const ModalContent = styled.View`
    top: 32%;
    left: 10%;

    justify-content: center;
    align-items: center;
    width: 80%;

    padding: 20px 10px;
    border-radius: 20px;

    background: #fff;
`

export const ContactItem = styled.Text`
    width: 83%;
    margin: 2px 0;
`

export const ContactTitle = styled.Text`
    width: 85%;

    font-family: Roboto_700Bold;
    font-size: 18px;
    color: #46266c;
`
