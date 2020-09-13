import { action } from "typesafe-actions";
import { BaseArrayProxy } from "../common/base-array-proxy";
import { HighlightPostProxy, HighlightsPostsTypes } from "./types";

export function loadPostsHighlights() {
    return action(HighlightsPostsTypes.LOAD_POSTS_HIGHLIGHTS)
}

export function loadPostsHighlightsSuccess(highlights: BaseArrayProxy<HighlightPostProxy>) {
    return action(HighlightsPostsTypes.LOAD_POSTS_HIGHLIGHTS_SUCCESS, {
        highlightsPosts: highlights
    })
}

export function loadPostsHighlightsFailure() {
    return action(HighlightsPostsTypes.LOAD_POSTS_HIGHLIGHTS_FAILURE)
}
