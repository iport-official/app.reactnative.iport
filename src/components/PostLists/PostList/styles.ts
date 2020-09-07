import styled from 'styled-components/native';
import { FlatList } from 'react-native';

import { PostItemProps } from '../../PostItem';

export const ContainerView = styled.View`
    flex: 1;
    margin-top: 10px;
`

export const PostFlatList = styled(FlatList as new () => FlatList<PostItemProps>)`
    flex: 1;
    flex-direction: row;
`
