import { AxiosResponse } from "axios"
import { getItemAsync } from "expo-secure-store"
import { call, select, put } from "redux-saga/effects"

import { ApplicationState } from "../.."
import { loadPostsHighlightsFailure, loadPostsHighlightsSuccess } from "./actions"
import { HighlightPostProxy, HighlightsPostsTypes } from "./types"

import { BaseArrayProxy } from "../common/base-array-proxy"

import api from "../../../services/api"

export interface LoadPostsHighlightsAction {
    type: typeof HighlightsPostsTypes.LOAD_POSTS_HIGHLIGHTS_REQUEST
    payload: {
        shouldStart: boolean
        pageNumber: number
    }
}

const getHighlightsPosts = (state: ApplicationState) => state.highlightsPosts

export function* loadPostsHighlights({ payload }: LoadPostsHighlightsAction) {
    try {
        const token = yield Promise.resolve(getItemAsync('access_token'))
        const response: AxiosResponse<BaseArrayProxy<HighlightPostProxy>> = yield call(
            api.get,
            `posts/highlights?page=${payload.pageNumber}`, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
        const { highlightsPosts }: ReturnType<typeof getHighlightsPosts> = yield select(getHighlightsPosts)
        const data = payload.shouldStart
            ? response.data
            : {
                length: response.data.length,
                array: [
                    ...highlightsPosts.array,
                    ...response.data.array
                ]
            }

        yield put(loadPostsHighlightsSuccess(data))
    } catch (error) {
        yield put(loadPostsHighlightsFailure())
    }
}
