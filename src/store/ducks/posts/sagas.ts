import { AxiosResponse } from "axios";
import { getItemAsync } from "expo-secure-store";
import { call, put } from "redux-saga/effects";

import { BaseArrayProxy } from "../../../services/base-array-proxy";

import api from "../../../services/api";

import {
    loadPostsByCategoryFailure,
    loadPostsByCategorySuccess,
    loadPostsHighlightsFailure,
    loadPostsHighlightsSuccess
} from "./actions";

import { PostProxy, PostsTypes } from "./types";

interface LoadPostsHighlightsActions {
    type: typeof PostsTypes.LOAD_POSTS_HIGHLIGHTS_REQUEST
    payload: {
        pageNumber: number
    }
}

interface LoadPostsByCategoryAction {
    type: typeof PostsTypes.LOAD_POSTS_BY_CATEGORY_REQUEST
    payload: {
        category: string
        pageNumber: number
    }
}

export function* loadPostsHighlights({ payload }: LoadPostsHighlightsActions) {
    try {
        const token = yield Promise.resolve(getItemAsync('access_token'))
        const response: AxiosResponse<BaseArrayProxy<PostProxy>> = yield call(
            api.get,
            `highlights?page=${payload.pageNumber}`, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
        yield put(loadPostsHighlightsSuccess(response.data))
    } catch (error) {
        yield put(loadPostsHighlightsFailure())
    }
}

export function* loadPostsByCategory({ payload }: LoadPostsByCategoryAction) {
    try {
        const token = yield Promise.resolve(getItemAsync('access_token'))
        const response: AxiosResponse<BaseArrayProxy<PostProxy>> = yield call(
            api.get,
            `categories?category=${payload.category}&page=${payload.pageNumber}`, {
            headers: {
                Authorization: 'Bearer' + token
            }
        })
        yield put(loadPostsByCategorySuccess(response.data))
    } catch (error) {
        yield put(loadPostsByCategoryFailure())
    }
}
