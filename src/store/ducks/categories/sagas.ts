import { AxiosResponse } from 'axios'
import { call, put, select } from 'redux-saga/effects'
import { getItemAsync } from 'expo-secure-store'

import { ApplicationState } from '../..'
import { CategoriesTypes, CategoryProxy } from './types'
import { loadSuccess, loadFailure } from './actions'

import { BaseArrayProxy } from '../../../services/base-array-proxy'

import api from '../../../services/api'

interface LoadRequestAction {
    type: typeof CategoriesTypes.LOAD_REQUEST
    payload: {
        pageNumber: number,
        shouldStart: boolean
    }
}

const getCategoriesState = (state: ApplicationState) => state.categories

export function* loadCategories({ payload }: LoadRequestAction) {
    try {
        const token = yield Promise.resolve(getItemAsync('access_token'))
        const response: AxiosResponse<BaseArrayProxy<CategoryProxy>> = yield call(
            api.get,
            `categories?page=${payload.pageNumber}`, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })

        const { categories }: ReturnType<typeof getCategoriesState> = yield select(getCategoriesState)
        const data = payload.shouldStart
            ? response.data
            : {
                lenght: categories.lenght + response.data.lenght,
                array: [
                    ...categories.array,
                    ...response.data.array
                ]
            }

        yield put(loadSuccess(data))
    } catch (error) {
        yield put(loadFailure())
    }
}
