import { AxiosResponse } from "axios";
import { getItemAsync } from "expo-secure-store";
import { call, put, select } from "redux-saga/effects";

import { BaseArrayProxy } from "../../../services/base-array-proxy";

import api from "../../../services/api";

import {
    loadPostsByCategoryFailure,
    loadPostsByCategorySuccess,
    loadPostsHighlightsFailure,
    loadPostsHighlightsSuccess
} from "./actions";

import { PostProxy, PostsTypes } from "./types";
import { ApplicationState } from "../..";

interface LoadPostsHighlightsActions {
    type: typeof PostsTypes.LOAD_POSTS_HIGHLIGHTS_REQUEST
    payload: {
        shouldStart: boolean
        pageNumber: number
    }
}

interface LoadPostsByCategoryAction {
    type: typeof PostsTypes.LOAD_POSTS_BY_CATEGORY_REQUEST
    payload: {
        shouldStart: boolean
        category: string
        pageNumber: number
    }
}

const getPostsState = (state: ApplicationState) => state.posts

export function* loadPostsHighlights({ payload }: LoadPostsHighlightsActions) {
    try {
        const token = yield Promise.resolve(getItemAsync('access_token'))
        const response: AxiosResponse<BaseArrayProxy<PostProxy>> = yield call(
            api.get,
            `posts/highlights?page=${payload.pageNumber}`, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })

        const { highlights }: ReturnType<typeof getPostsState> = yield select(getPostsState)
        const data = payload.shouldStart
            ? response.data
            : {
                lenght: highlights.lenght + response.data.lenght,
                array: [
                    ...highlights.array,
                    ...response.data.array
                ]
            }

        yield put(loadPostsHighlightsSuccess(data))
    } catch (error) {
        yield put(loadPostsHighlightsFailure())
    }
}

export function* loadPostsByCategory({ payload }: LoadPostsByCategoryAction) {
    try {
        const token = yield Promise.resolve(getItemAsync('access_token'))
        const response: AxiosResponse<BaseArrayProxy<PostProxy>> = yield call(
            api.get,
            `posts/categories?category=${payload.category}&page=${payload.pageNumber}`, {
            headers: {
                Authorization: 'Bearer' + token
            }
        })

        const { categories }: ReturnType<typeof getPostsState> = yield select(getPostsState)
        const data = payload.shouldStart
            ? response.data
            : {
                lenght: categories.lenght + response.data.lenght,
                array: [
                    ...categories.array,
                    ...response.data.array
                ]
            }

        yield put(loadPostsByCategorySuccess(data))
    } catch (error) {
        yield put(loadPostsByCategoryFailure())
    }
}
