import React, { useState, useEffect, useRef } from 'react';
import { ViewToken } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { ApplicationState } from '../../../store';
import { BaseArrayProxy } from '../../../store/ducks/common/base-array-proxy';
import { LoadPostsHighlightsAction } from '../../../store/ducks/highlightsPosts/sagas';
import {
    HighlightPostProxy,
    HighlightsPostsTypes
} from '../../../store/ducks/highlightsPosts/types';

import { ContainerView, TitleText } from './styles';

import PostList from '../../atoms/Views/PostList';
import PostItem from '../../molecules/PostItem';

interface HighlightsPostListProps {
    title: string;
}

const HighlightsPostList: React.FC<HighlightsPostListProps> = ({
    title
}: HighlightsPostListProps) => {
    const dispatch = useDispatch();

    useEffect(() => {
        loadHighlightsPosts(0, true);
    }, []);

    const highlightsLoading = useSelector<ApplicationState, boolean>(
        (state) => state.highlightsPosts.loadingHighlightsPosts
    );
    const { array } = useSelector<
        ApplicationState,
        BaseArrayProxy<HighlightPostProxy>
    >((state) => state.highlightsPosts.highlightsPosts);

    const [page, setPage] = useState(0);

    const handleViewabilityConfig = useRef({
        viewAreaCoveragePercentThreshold: 50
    });
    const handleOnViewableItemsChanged = useRef(
        (viewableItems: {
            viewableItems: ViewToken[];
            changed: ViewToken[];
        }) => {
            // console.log(viewableItems)
        }
    );

    function loadHighlightsPosts(
        pageNumber: number = page,
        shouldStart = false
    ) {
        dispatch<LoadPostsHighlightsAction>({
            type: HighlightsPostsTypes.LOAD_POSTS_HIGHLIGHTS_REQUEST,
            payload: {
                pageNumber,
                shouldStart
            }
        });
        setPage(pageNumber + 1);
    }

    return (
        //#region JSX

        <ContainerView>
            <TitleText>{title}</TitleText>
            <PostList
                data={array}
                onEndReached={() => loadHighlightsPosts()}
                loadingPosts={highlightsLoading}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {
                    const { id, ...rest } = item;
                    return <PostItem key={id} id={id} {...rest} />;
                }}
                onViewableItemsChanged={handleOnViewableItemsChanged.current}
                viewabilityConfig={handleViewabilityConfig.current}
            />
        </ContainerView>

        //#endregion
    );
};

export default HighlightsPostList;
