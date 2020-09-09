import { Reducer } from 'redux'
import {
    CategoriesTypes,
    CategoriesState
} from './types'

const INITIAL_STATE: CategoriesState = {
    data: {
        lenght: 0,
        array: []
    },
    error: false,
    loading: false,
    select: null
}

const reducer: Reducer<CategoriesState> = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case CategoriesTypes.LOAD_REQUEST:
            return {
                ...state,
                loading: true,
                select: null
            }
        case CategoriesTypes.LOAD_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                data: action.payload.data,
                select: null
            }
        case CategoriesTypes.LOAD_FAILURE:
            return {
                ...state,
                loading: false,
                error: true,
                data: {
                    lenght: 0,
                    array: []
                },
                select: null
            }
        case CategoriesTypes.SELECT:
            return {
                ...state,
                select: action.payload.select
            }
        default:
            return state
    }

}

export default reducer
