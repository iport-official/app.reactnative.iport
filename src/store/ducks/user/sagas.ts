import { getItemAsync, setItemAsync } from "expo-secure-store";

import api from "../../../services/api";
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
import { AxiosResponse } from "axios";
import { call, put } from "redux-saga/effects";

export interface RegisterAction {
    type: typeof UserTypes.REGISTER_REQUEST
    payload: {
        profileImage: string
        email: string
        password: string
        accountType: AccountType
        username: string
        city: string
        state: string
        content: PersonalContent | CompanyContent
        telephones: string[]
        emails: string[]
    }
}

export interface PersonalContent {
    cpf: string
}

export interface CompanyContent {
    street: string
    number: number
    cep: string
    cnpj: string
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

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
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

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function* getMe() {
    try {
        const token = yield Promise.resolve(getItemAsync('access_token'))
        const response: AxiosResponse<UserProxy> = yield call(
            api.get,
            `users/me`,
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
