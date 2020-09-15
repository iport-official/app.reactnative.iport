import { BaseArrayProxy } from "../common/base-array-proxy";

import { PostProxy } from "../common/post-proxy";

export enum CategoriesPostsTypes {
    LOAD_POSTS_BY_CATEGORY_REQUEST = '@posts/LOAD_POSTS_BY_CATEGORY',
    LOAD_POSTS_BY_CATEGORY_SUCCESS = '@posts/LOAD_POSTS_BY_CATEGORY_REQUEST_SUCCESS',
    LOAD_POSTS_BY_CATEGORY_FAILURE = '@posts/LOAD_POSTS_BY_CATEGORY_REQUEST_FAILURE',
}

export interface CategoryPostProxy extends PostProxy { }

export interface CategoriesPostsState {
    readonly loadingCategoriesPosts: boolean
    readonly categoriesPosts: BaseArrayProxy<CategoryPostProxy>
    readonly errorCategoriesPosts: boolean
}
