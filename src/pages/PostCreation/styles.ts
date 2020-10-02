import { Roboto_400Regular } from '@expo-google-fonts/roboto'
import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'

export const ContainerSafeAreaView = styled(SafeAreaView)`
    flex: 1;
`

export const HeaderView = styled.View`
    height: 60px;
    justify-content: center;
    align-items: center;
`

export const TitleText = styled.Text`
    color: #303030;
    font-size: 17px;
    font-family: Roboto_700Bold;
`

export const ContainerScrollView = styled.ScrollView`
    flex: 1;
`
// Roboto_400Regular
// Roboto_700Bold
