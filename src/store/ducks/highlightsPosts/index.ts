import { Reducer } from "redux";
import { HighlightsPostsState, HighlightsPostsTypes } from "./types";

const INITIAL_STATE: HighlightsPostsState = {
    highlightsPosts: {
        length: 0,
        array: []
    },
    loadingHighlightsPosts: false,
    errorHighlightsPosts: false
}

const reducer: Reducer<HighlightsPostsState> = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case HighlightsPostsTypes.LOAD_POSTS_HIGHLIGHTS_REQUEST:
            return {
                ...state,
                loadingHighlightsPosts: true,
            }
        case HighlightsPostsTypes.LOAD_POSTS_HIGHLIGHTS_SUCCESS:
            return {
                ...state,
                loadingHighlightsPosts: false,
                highlightsPosts: action.payload.highlightsPosts
            }
        case HighlightsPostsTypes.LOAD_POSTS_HIGHLIGHTS_FAILURE:
            return {
                ...state,
                loadingHighlightsPosts: false,
                errorHighlightsPosts: true
            }
        default:
            return state
    }

}

export default reducer
