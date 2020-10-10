import React from 'react';
import { FlatListProps } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import { PostProxy } from '../../../store/ducks/common/post-proxy';

import { EndFlatListActivityIndicator } from './styles';

interface PostListProps extends FlatListProps<PostProxy> {
    loadingPosts: boolean;
}

const PostList: React.FC<PostListProps> = ({
    loadingPosts,
    ...rest
}: PostListProps) => {
    return (
        <FlatList
            style={{ flexDirection: 'row' }}
            horizontal
            showsHorizontalScrollIndicator={false}
            onEndReachedThreshold={0.1}
            ListFooterComponent={
                <EndFlatListActivityIndicator
                    style={{
                        display: loadingPosts ? 'flex' : 'none'
                    }}
                />
            }
            contentContainerStyle={{ alignItems: 'center' }}
            {...rest}
        />
    );
};

export default PostList;
