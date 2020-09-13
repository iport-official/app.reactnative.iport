import { action } from "typesafe-actions"
import { BaseArrayProxy } from "../common/base-array-proxy"
import { CategoriesPostsTypes, CategoryPostProxy } from "./types"

export function loadPostsByCategory() {
    return action(CategoriesPostsTypes.LOAD_POSTS_BY_CATEGORY)
}

export function loadPostsByCategorySuccess(categories: BaseArrayProxy<CategoryPostProxy>) {
    return action(CategoriesPostsTypes.LOAD_POSTS_BY_CATEGORY_SUCCESS, {
        categoriesPosts: categories
    })
}

export function loadPostsByCategoryFailure() {
    return action(CategoriesPostsTypes.LOAD_POSTS_BY_CATEGORY_FAILURE)
}
