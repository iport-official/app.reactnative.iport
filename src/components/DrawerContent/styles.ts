import styled from 'styled-components/native'
import { DrawerContentScrollView } from '@react-navigation/drawer'

import { colors } from '../../styles'

export const ContainerView = styled.View`
    flex: 1;
    background: ${colors.grayPurple};
`

export const ContentDrawerContentScrollView = styled(DrawerContentScrollView)``

export const ProfileView = styled.View`
    align-items: center;
    flex-direction: row;
    padding-bottom: 20px;
    padding-left: 15px;
`

export const ProfileText = styled.Text`
    margin-left: 10px;
    font-family: Poppins_600SemiBold;
    font-size: 15px;
    color: #fff;
`

export const ContentView = styled.View``

export const FooterView = styled.View``
