import { BaseArrayProxy } from "../../../services/base-array-proxy";

export enum CategoriesTypes {
    LOAD_REQUEST = '@categories/LOAD_REQUEST',
    LOAD_SUCCESS = '@categories/LOAD_SUCCESS',
    LOAD_FAILURE = '@categories/LOAD_FAILURE',
    SELECT = '@categories/SELECT'
}

export interface CategoryProxy {
    id: string
    name: string
    category: string
}

export interface CategoriesState {
    readonly data: BaseArrayProxy<CategoryProxy>
    readonly loading: boolean
    readonly error: boolean
    readonly select: CategoryProxy | null
}
