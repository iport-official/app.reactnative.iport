import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const ContainerSafeAreaView = styled(SafeAreaView)`
    flex: 1;
`

export const ContainerKeyboardAvoidView = styled.View`
    flex: 1;
    justify-content: space-between;
`

export const ContentView = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;

    background: #fff;

    margin-bottom: 40px;
`
