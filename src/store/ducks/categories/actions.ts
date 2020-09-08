import { action } from 'typesafe-actions'
import { CategoriesTypes, CategoryProxy } from './types'
import { BaseArrayProxy } from '../../../services/base-array-proxy'

export function loadRequest() {
    return action(CategoriesTypes.LOAD_REQUEST)
}

export function loadSuccess(data: BaseArrayProxy<CategoryProxy>) {
    return action(CategoriesTypes.LOAD_SUCCESS, {
        data
    })
}

export function loadFailure() {
    return action(CategoriesTypes.LOAD_FAILURE)
}
