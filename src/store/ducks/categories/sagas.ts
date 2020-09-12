import { AxiosResponse } from 'axios'
import { call, put } from 'redux-saga/effects'
import { getItemAsync } from 'expo-secure-store'

import { CategoriesTypes, CategoryProxy } from './types'
import { loadSuccess, loadFailure } from './actions'

import api from '../../../services/api'
import { BaseArrayProxy } from '../../../services/base-array-proxy'

interface LoadRequestAction {
    type: typeof CategoriesTypes.LOAD_REQUEST
    payload: {
        pageNumber: number
    }
}

export function* loadCategories({ type, payload }: LoadRequestAction) {
    try {
        const token = yield Promise.resolve(getItemAsync('access_token'))
        const response: AxiosResponse<BaseArrayProxy<CategoryProxy>> = yield call(
            api.get,
            `categories?page=${payload.pageNumber}`, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })

        yield put(loadSuccess(response.data))
    } catch (error) {
        yield put(loadFailure())
    }
}
