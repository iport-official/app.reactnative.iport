import { action } from 'typesafe-actions'
import { CategoriesTypes, CategoryProxy } from './types'

export function loadRequest() {
    return action(CategoriesTypes.LOAD_REQUEST)
}

export function loadSuccess(data: CategoryProxy[]) {
    return action(CategoriesTypes.LOAD_SUCCESS)
}

export function loadFailure() {
    return action(CategoriesTypes.LOAD_FAILURE)
}
