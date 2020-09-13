import { AxiosResponse } from "axios"
import { getItemAsync } from "expo-secure-store"
import { call, put, select } from "redux-saga/effects"
import { ApplicationState } from "../.."
import api from "../../../services/api"
import { BaseArrayProxy } from "../common/base-array-proxy"
import { CategoryProxy } from "../categories/types"
import { loadPostsByCategoryFailure, loadPostsByCategorySuccess } from "./actions"
import { CategoriesPostsTypes, CategoryPostProxy } from "./types"

interface LoadPostsByCategoryAction {
    type: typeof CategoriesPostsTypes.LOAD_POSTS_BY_CATEGORY
    payload: {
        shouldStart: boolean
        category: CategoryProxy
        pageNumber: number
    }
}

const getGetPostsByCategory = (state: ApplicationState) => state.categoriesPosts

export function* loadPostsByCategory({ payload }: LoadPostsByCategoryAction) {
    try {
        const token = yield Promise.resolve(getItemAsync('access_token'))
        const response: AxiosResponse<BaseArrayProxy<CategoryPostProxy>> = yield call(
            api.get,
            `posts/categories?category=${payload.category.category}&page=${payload.pageNumber}`, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
        const { categoriesPosts }: ReturnType<typeof getGetPostsByCategory> = yield select(getGetPostsByCategory)
        const data = payload.shouldStart
            ? response.data
            : {
                length: categoriesPosts.length,
                array: [
                    ...categoriesPosts.array,
                    ...response.data.array
                ]
            }

        yield put(loadPostsByCategorySuccess(data))
    } catch (error) {
        yield put(loadPostsByCategoryFailure())
    }
}
