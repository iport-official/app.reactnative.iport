import { BaseArrayProxy } from "../../../services/base-array-proxy";
import { UserProxy } from "../../../services/User/user.proxy";

export enum PostsTypes {
    LOAD_POSTS_BY_CATEGORY_REQUEST = '@posts/LOAD_POSTS_BY_CATEGORY_REQUEST',
    LOAD_POSTS_BY_CATEGORY_REQUEST_SUCCESS = '@posts/LOAD_POSTS_BY_CATEGORY_REQUEST_SUCCESS',
    LOAD_POSTS_BY_CATEGORY_REQUEST_FAILURE = '@posts/LOAD_POSTS_BY_CATEGORY_REQUEST_FAILURE',
    LOAD_POSTS_HIGHLIGHTS_REQUEST = '@posts/LOAD_POSTS_HIGHLIGHTS',
    LOAD_POSTS_HIGHLIGHTS_REQUEST_SUCCESS = '@posts/LOAD_POSTS_HIGHLIGHTS_SUCCESS',
    LOAD_POSTS_HIGHLIGHTS_REQUEST_FAILURE = '@posts/LOAD_POSTS_HIGHLIGHTS_FAILURE'
}

export interface PostProxy {
    id: string
    image: string
    title: string
    description: string
    category: string
    recomendation: number
    contact: string
    salary: number
    post: string
    local: string
    requirements: string
    experienceLevel: string
    vacancyDescription: string
    createAt: Date
    user: UserProxy
}

export interface PostsState {
    readonly loadingHighlights: boolean
    readonly errorHighlights: boolean
    readonly highlights: BaseArrayProxy<PostProxy>

    readonly loadingCategories: boolean
    readonly categories: BaseArrayProxy<PostProxy>
    readonly errorCategories: boolean
}
