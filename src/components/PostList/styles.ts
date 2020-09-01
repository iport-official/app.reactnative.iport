import styled from 'styled-components/native';
import { FlatList } from 'react-native';

import { PostItemProps } from '../PostItem';
import { colors } from '../../styles';

export const ContainerView = styled.View`
    flex: 1;
    margin-top: 10px;
`

export const TitleText = styled.Text`
    font-family: Roboto_700Bold;
    text-shadow: 0px 0px 1px ${colors.lighterVividPurple}80;
    font-size: 26px;

    color: ${colors.vividPurple};
    margin-bottom: 5px;
    margin-left: 40px;
`

export const PostFlatList = styled(FlatList as new () => FlatList<PostItemProps>)`
    flex: 1;
    flex-direction: row;
`
