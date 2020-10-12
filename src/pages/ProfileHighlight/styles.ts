import { SafeAreaView } from 'react-native-safe-area-context';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Roboto_700Bold } from '@expo-google-fonts/roboto';

import styled from 'styled-components/native';

export const ContainerSafeAreaView = styled(SafeAreaView)`
    flex: 1;
`

export const ContainerKeyboardAvoidView = styled.View`
    flex: 1;
`

export const ProfileHighlightContainer = styled.View`
    height: 100%;
    justify-content: center;
    align-items: center;
`

export const ModalContainer = styled.TouchableOpacity`
    position: absolute;
    height: 100%;
    width: 100%;

    background: #0006;
`

export const ModalContent = styled.View`
    top: 10%;
    left: 10%;

    justify-content: center;
    align-items: center;
    width: 80%;

    padding: 20px 10px;
    border-radius: 20px;

    background: #fff;
`

export const ModalContentItem = styled.ScrollView`
    width: 95%;
`

export const SkillLevelValue = styled.Text`
    color: #46266c;
    font-family: Roboto_700Bold;
`

export const ModalButtonsContainer = styled.View`
    flex-direction: row;
    margin-top: 20px;
    width: 90%;
    justify-content: space-between;
`
