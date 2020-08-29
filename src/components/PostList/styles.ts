import styled from 'styled-components/native'
import { FlatList } from 'react-native'

import { PostItemProps } from '../Post'

import { colors } from '../../styles'

export const ContainerView = styled.View`
    flex: 1;
    margin-top: 10px;
`

export const TitleText = styled.Text`
    font-family: Roboto_700Bold;
    text-shadow: 0px 0px 4px #00000080;
    font-size: 20px;
    text-align: center;
    color: black;
    margin-bottom: 15px;
`

export const PostFlatList = styled(FlatList as new () => FlatList<PostItemProps>)`
    flex: 1;
    flex-direction: row;
`
