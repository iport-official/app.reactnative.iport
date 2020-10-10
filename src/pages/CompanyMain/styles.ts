import { SafeAreaView } from 'react-native-safe-area-context';

import styled from 'styled-components/native';

export const ContainerSafeAreaView = styled(SafeAreaView)`
    flex: 1;
`;

export const ContainerScrollView = styled.ScrollView``;

export const WarningView = styled.View`
    flex: 1;
    margin-top: 20px;
    align-items: center;
`;

export const WarningText = styled.Text`
    margin-top: 20px;
    color: #a9a9a9;
    font-family: Poppins_400Regular;
    text-align: center;
    font-size: 18px;
    padding: 0 18px;
`;
