import { call, put } from "redux-saga/effects";
import { AxiosResponse } from "axios";
import { getItemAsync, setItemAsync } from "expo-secure-store";

import { ApplicationState } from "../..";
import { getProfileFailure, getProfileSuccess, loginFailure, loginSuccess } from "./action";
import { LoginProxy, UserProxy, UserTypes } from "./types";

import api from "../../../services/api";

interface LoginAction {
    type: typeof UserTypes.LOGIN_REQUEST
    payload: {
        email: string
        password: string
        access_token: string
    }
}

interface GetProfileAction {
    type: typeof UserTypes.GET_PROFILE_REQUEST
    payload: {
        access_token: string
        user: UserProxy | null
    }
}

const user = (state: ApplicationState) => state.user

export function* login({ payload }: LoginAction) {
    try {
        const response: AxiosResponse<LoginProxy> = yield call(
            api.post,
            `users/login`, {
            email: payload.email,
            password: payload.password
        })

        yield Promise.resolve(setItemAsync('access_token', response.data.access_token))
        yield put(loginSuccess(response.data))
    } catch (error) {
        yield put(loginFailure())
    }
}

export function* getProfile({ payload }: GetProfileAction) {
    try {
        const token = yield Promise.resolve(getItemAsync('access_token'))
        const response: AxiosResponse<UserProxy> = yield call(
            api.get,
            `users/profile`, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })

        yield put(getProfileSuccess(response.data))
    } catch (error) {
        yield put(getProfileFailure())
    }
}
