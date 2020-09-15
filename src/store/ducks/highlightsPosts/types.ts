import { BaseArrayProxy } from "../common/base-array-proxy";
import { PostProxy } from "../common/post-proxy";

export enum HighlightsPostsTypes {
    LOAD_POSTS_HIGHLIGHTS_REQUEST = '@posts/LOAD_POSTS_HIGHLIGHTS',
    LOAD_POSTS_HIGHLIGHTS_SUCCESS = '@posts/LOAD_POSTS_HIGHLIGHTS_SUCCESS',
    LOAD_POSTS_HIGHLIGHTS_FAILURE = '@posts/LOAD_POSTS_HIGHLIGHTS_FAILURE'
}

export interface HighlightPostProxy extends PostProxy { }

export interface HighlightsPostsState {
    readonly loadingHighlightsPosts: boolean
    readonly errorHighlightsPosts: boolean
    readonly highlightsPosts: BaseArrayProxy<HighlightPostProxy>
}
