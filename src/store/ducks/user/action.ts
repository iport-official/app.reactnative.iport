import { action } from "typesafe-actions";
import { LoginProxy, UserProxy, UserTypes } from "./types";

export function login() {
    return action(UserTypes.LOGIN_REQUEST)
}

export function loginSuccess(login: LoginProxy) {
    return action(UserTypes.LOGIN_SUCCESS, { login })
}

export function loginFailure() {
    return action(UserTypes.LOGIN_FAILURE)
}

export function getProfile() {
    return action(UserTypes.GET_PROFILE_REQUEST)
}

export function getProfileSuccess(user: UserProxy | null) {
    return action(UserTypes.GET_PROFILE_SUCCESS, { user })
}

export function getProfileFailure() {
    return action(UserTypes.GET_PROFILE_FAILURE)
}
