import styled from 'styled-components/native'

import { colors } from '../../../styles'
import { FlatList } from 'react-native'
import { PostItemProps } from '../../PostItem'

export const ContainerView = styled.View``

export const TitleText = styled.Text`
    font-family: Poppins_600SemiBold;
    text-shadow: 0px 0px 1px ${colors.lighterVividPurple}80;
    font-size: 21px;

    color: ${colors.livePurple};
    margin: 7px 0 10px 0;
    padding-left: 30px;
`

export const EndFlatListActivityIndicator = styled.ActivityIndicator.attrs({
    size: 'large',
    color: '#999'
})`
    margin: 0 30px;
`

export const PostFlatList = styled(FlatList as new () => FlatList<PostItemProps>)`
    flex: 1;
    flex-direction: row;
`
