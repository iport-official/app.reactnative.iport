import styled from 'styled-components/native'
import { FlatList } from 'react-native'

import { PostItemProps } from '../Post'

export const ContainerView = styled.View`
    flex: 1;
    margin-top: 20px;
`

export const TitleText = styled.Text`
    font-family: Roboto_700Bold;
    text-shadow: 0px 0px 4px #00000080;
    font-size: 20px;
    text-align: center;
    color: black;
    margin-bottom: 30px;
`

export const PostFlatList = styled(FlatList as new () => FlatList<PostItemProps>)`
    flex: 1;
    flex-direction: row;
`
