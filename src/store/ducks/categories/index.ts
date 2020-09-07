import { Reducer } from 'redux'
import {
    CategoriesTypes,
    CategoriesState
} from './types'

const INITIAL_STATE: CategoriesState = {
    data: [],
    error: false,
    loading: false
}

const reducer: Reducer<CategoriesState> = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case CategoriesTypes.LOAD_REQUEST:
            return {
                ...state,
                loading: true
            }
            break
        case CategoriesTypes.LOAD_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                data: action.payload.data
            }
            break
        case CategoriesTypes.LOAD_FAILURE:
            return {
                ...state,
                loading: false,
                error: true,
                data: []
            }
            break
        default:
            return state
    }

}

export default reducer
