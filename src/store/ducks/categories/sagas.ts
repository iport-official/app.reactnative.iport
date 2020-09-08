import { AxiosResponse } from 'axios'
import { call, put } from 'redux-saga/effects'
import { getItemAsync } from 'expo-secure-store'

import { CategoryProxy } from './types'
import { loadSuccess, loadFailure } from './actions'

import api from '../../../services/api'
import { BaseArrayProxy } from '../../../services/base-array-proxy'

export function* loadCategories(categoryPage: number) {
    try {
        const token = yield getItemAsync('access_token')
        const response: AxiosResponse<BaseArrayProxy<CategoryProxy>> = yield call(
            api.get,
            `categories?page=${categoryPage}`,
            {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            })

        yield put(loadSuccess(response.data))
    } catch (error) {
        yield put(loadFailure())
    }
}
