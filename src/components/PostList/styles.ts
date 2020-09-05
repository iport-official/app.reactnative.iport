import { Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import styled from 'styled-components/native';
import { FlatList } from 'react-native';

import { PostItemProps } from '../PostItem';
import { colors } from '../../styles';

export const ContainerView = styled.View`
    flex: 1;
    margin-top: 10px;
`

export const TitleText = styled.Text`
    font-family: Poppins_600SemiBold;
    text-shadow: 0px 0px 1px ${colors.lighterVividPurple}80;
    font-size: 21px;

    color: ${colors.vividPurple};
    margin: 7px 0 10px 0;
    padding-left: 30px;
`

export const PostFlatList = styled(FlatList as new () => FlatList<PostItemProps>)`
    flex: 1;
    flex-direction: row;
`
