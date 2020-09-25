import React from 'react';
import { FlatListProps } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import { CategoryPostProxy } from '../../../store/ducks/categoriesPosts/types';

import {
    EndFlatListActivityIndicator
} from './styles'

interface PostListProps extends FlatListProps<CategoryPostProxy> {
    loadingPosts: boolean
}

const PostList: React.FC<PostListProps> = ({ loadingPosts, ...rest }) => {
    return (
        <FlatList
            style={{ flexDirection: 'row' }}
            horizontal
            showsHorizontalScrollIndicator={false}
            onEndReachedThreshold={0.1}
            ListFooterComponent={(
                <EndFlatListActivityIndicator
                    style={{
                        display: loadingPosts
                            ? 'flex'
                            : 'none'
                    }}
                />
            )}
            contentContainerStyle={{ alignItems: "center" }}
            {...rest}
        />
    )
}

export default PostList;
