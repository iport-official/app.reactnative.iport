import { Reducer } from 'redux'
import {
    CategoriesTypes,
    CategoriesState
} from './types'

const INITIAL_STATE: CategoriesState = {
    categories: {
        lenght: 0,
        array: []
    },
    error: false,
    loading: false,
    selectedCategory: null
}

const reducer: Reducer<CategoriesState> = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case CategoriesTypes.LOAD_REQUEST:
            return {
                ...state,
                loading: true,
                selectedCategory: null
            }
        case CategoriesTypes.LOAD_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                categories: action.payload.categories,
                selectedCategory: null
            }
        case CategoriesTypes.LOAD_FAILURE:
            return {
                ...state,
                loading: false,
                error: true,
                categories: {
                    lenght: 0,
                    array: []
                },
                selectedCategory: null
            }
        case CategoriesTypes.SELECT:
            return {
                ...state,
                selectedCategory: action.payload.select
            }
        default:
            return state
    }

}

export default reducer
