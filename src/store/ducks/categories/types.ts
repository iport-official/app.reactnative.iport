/**
 * Action types
 */
export enum CategoriesTypes {
    LOAD_REQUEST = '@categories/LOAD_REQUEST',
    LOAD_SUCCESS = '@categories/LOAD_SUCCESS',
    LOAD_FAILURE = '@categories/LOAD_FAILURE'
}

/**
 * Data types
 */
export interface CategoryProxy {
    id: string
    name: string
    category: string
}

/**
 * State type
 */
export interface CategoriesState {
    readonly data: CategoryProxy[]
    readonly loading: boolean
    readonly error: boolean
}
