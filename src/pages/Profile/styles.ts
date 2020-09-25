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
