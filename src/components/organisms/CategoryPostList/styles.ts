import { FlatList } from 'react-native'
import styled from 'styled-components/native'
import { colors } from '../../../styles'
import { PostItemProps } from '../../molecules/PostItem'

export const ContainerView = styled.View``

export const TitleText = styled.Text`
    font-family: Poppins_600SemiBold;
    text-shadow: 0px 0px 1px ${colors.lighterVividPurple}80;
    font-size: 21px;

    color: ${colors.livePurple};
    margin: 7px 0 10px 0;
    padding-left: 30px;
`
