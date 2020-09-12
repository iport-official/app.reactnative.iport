import { action } from "typesafe-actions";
import { BaseArrayProxy } from "../../../services/base-array-proxy";
import { PostProxy, PostsTypes } from "./types";

export function loadPostsByCategory() {
    return action(PostsTypes.LOAD_POSTS_BY_CATEGORY_REQUEST)
}

export function loadPostsHighlights() {
    return action(PostsTypes.LOAD_POSTS_HIGHLIGHTS_REQUEST)
}

export function loadPostsByCategorySuccess(data: BaseArrayProxy<PostProxy>) {
    return action(PostsTypes.LOAD_POSTS_BY_CATEGORY_REQUEST_SUCCESS, { data })
}

export function loadPostsByCategoryFailure() {
    return action(PostsTypes.LOAD_POSTS_BY_CATEGORY_REQUEST_FAILURE)
}

export function loadPostsHighlightsSuccess(data: BaseArrayProxy<PostProxy>) {
    return action(PostsTypes.LOAD_POSTS_HIGHLIGHTS_REQUEST_SUCCESS, { data })
}

export function loadPostsHighlightsFailure() {
    return action(PostsTypes.LOAD_POSTS_HIGHLIGHTS_REQUEST_FAILURE)
}
