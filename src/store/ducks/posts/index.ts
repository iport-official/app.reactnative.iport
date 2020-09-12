import { Reducer } from "redux";
import { PostsState, PostsTypes } from "./types";

const INITIAL_STATE: PostsState = {
    categories: {
        lenght: 0,
        array: []
    },
    loadingCategories: false,
    errorCategories: false,

    highlights: {
        lenght: 0,
        array: []
    },
    loadingHighlights: false,
    errorHighlights: false
}

const reducer: Reducer<PostsState> = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case PostsTypes.LOAD_POSTS_BY_CATEGORY_REQUEST:
            return {
                ...state,
                loadingCategories: true
            }
        case PostsTypes.LOAD_POSTS_BY_CATEGORY_REQUEST_SUCCESS:
            return {
                ...state,
                loadingCategories: false,
                categories: action.payload.categories
            }
        case PostsTypes.LOAD_POSTS_BY_CATEGORY_REQUEST_FAILURE:
            return {
                ...state,
                loadingCategories: false,
                errorCategories: true
            }
        case PostsTypes.LOAD_POSTS_HIGHLIGHTS_REQUEST:
            return {
                ...state,
                loadingHighlights: true
            }
        case PostsTypes.LOAD_POSTS_HIGHLIGHTS_REQUEST_SUCCESS:
            return {
                ...state,
                loadingHighlights: false,
                highlights: action.payload.highlights
            }
        case PostsTypes.LOAD_POSTS_HIGHLIGHTS_REQUEST_FAILURE:
            return {
                ...state,
                loadingHighlights: false,
                errorHighlights: false
            }
        default:
            return state
    }

}

export default reducer
