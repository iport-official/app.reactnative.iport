import { Reducer } from "redux";
import { CategoriesPostsState, CategoriesPostsTypes } from "./types";

const INITIAL_STATE: CategoriesPostsState = {
    categoriesPosts: {
        length: 0,
        array: []
    },
    loadingCategoriesPosts: false,
    errorCategoriesPosts: false
}

const reducer: Reducer<CategoriesPostsState> = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case CategoriesPostsTypes.LOAD_POSTS_BY_CATEGORY_REQUEST:
            return {
                ...state,
                loadingCategoriesPosts: true,
            }
        case CategoriesPostsTypes.LOAD_POSTS_BY_CATEGORY_SUCCESS:
            return {
                ...state,
                loadingCategoriesPosts: false,
                categoriesPosts: action.payload.categoriesPosts
            }
        case CategoriesPostsTypes.LOAD_POSTS_BY_CATEGORY_FAILURE:
            return {
                ...state,
                loadingCategoriesPosts: false,
                errorCategoriesPosts: true
            }
        default:
            return state
    }

}

export default reducer
