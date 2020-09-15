import { action } from 'typesafe-actions'
import { CategoriesTypes, CategoryProxy } from './types'
import { BaseArrayProxy } from '../common/base-array-proxy'

export function loadRequest() {
    return action(CategoriesTypes.LOAD_REQUEST)
}

export function loadSuccess(categories: BaseArrayProxy<CategoryProxy>) {
    return action(CategoriesTypes.LOAD_SUCCESS, { categories })
}

export function loadFailure() {
    return action(CategoriesTypes.LOAD_FAILURE)
}

export function select() {
    return action(CategoriesTypes.SELECT)
}
