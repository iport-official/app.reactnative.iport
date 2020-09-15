import { Reducer } from "redux";
import { UserState, UserTypes } from "./types";

const INITIAL_STATE: UserState = {
    user: null,
    login: null,
    loading: false,
    error: false
}

const reducer: Reducer<UserState> = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case UserTypes.LOGIN_REQUEST:
            return {
                ...state,
                loading: true
            }
        case UserTypes.LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                login: action.payload.login
            }
        case UserTypes.LOGIN_FAILURE:
            return {
                ...state,
                loading: false,
                error: true
            }
        case UserTypes.GET_PROFILE_REQUEST:
            return {
                ...state,
                loading: true
            }
        case UserTypes.GET_PROFILE_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload.user
            }
        case UserTypes.GET_PROFILE_FAILURE:
            return {
                ...state,
                loading: false,
                error: true
            }
        default:
            return state
    }

}

export default reducer
