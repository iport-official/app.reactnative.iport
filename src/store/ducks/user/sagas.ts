import { call, put } from "redux-saga/effects";
import { AxiosResponse } from "axios";
import { getItemAsync, setItemAsync } from "expo-secure-store";

import {
    getProfileFailure,
    getProfileSuccess,
    loginFailure,
    loginSuccess,
    registerFailure,
    registerSuccess
} from "./action";
import {
    AccountType,
    LoginProxy,
    RegisterProxy,
    UserProxy,
    UserTypes
} from "./types";

import api from "../../../services/api";

export interface RegisterAction {
    type: typeof UserTypes.REGISTER_REQUEST
    payload: {
        profileImage: string
        email: string
        password: string
        accountType: AccountType
        username: string
        cpf: string
        cnpj: string
        cep: string
        telephones: string[]
        emails: string[]
    }
}

export interface LoginAction {
    type: typeof UserTypes.LOGIN_REQUEST
    payload: {
        email: string
        password: string
    }
}

export interface GetProfileAction {
    type: typeof UserTypes.GET_PROFILE_REQUEST
}

export function* register({ payload }: RegisterAction) {
    try {
        const response: AxiosResponse<RegisterProxy> = yield call(
            api.post,
            'users',
            { ...payload }
        )
        yield put(registerSuccess(response.data))
    } catch (error) {
        yield put(registerFailure())
    }
}

export function* login({ payload }: LoginAction) {
    try {
        const response: AxiosResponse<LoginProxy> = yield call(
            api.post,
            `users/login`,
            {
                email: payload.email,
                password: payload.password
            }
        )
        yield Promise.resolve(setItemAsync('access_token', response.data.access_token))
        yield put(loginSuccess(response.data))
    } catch (error) {
        yield put(loginFailure())
    }
}

export function* getProfile() {
    try {
        const token = yield Promise.resolve(getItemAsync('access_token'))
        const response: AxiosResponse<UserProxy> = yield call(
            api.get,
            `users/profile`,
            {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            }
        )
        yield put(getProfileSuccess(response.data))
    } catch (error) {
        yield put(getProfileFailure())
    }
}
