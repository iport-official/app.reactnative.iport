export enum UserTypes {
    LOGIN_REQUEST = '@user/LOGIN_REQUEST',
    LOGIN_SUCCESS = '@user/LOGIN_SUCCESS',
    LOGIN_FAILURE = '@user/LOGIN_FAILURE',
    GET_PROFILE_REQUEST = '@user/GET_PROFILE_REQUEST',
    GET_PROFILE_SUCCESS = '@user/GET_PROFILE_SUCCESS',
    GET_PROFILE_FAILURE = '@user/GET_PROFILE_FAILURE'
}

export enum AccountType {
    PERSONAL = 'PERSONAL',
    COMPANY = 'COMPANY'
}

export interface LoginProxy {
    access_token: string
}

export interface UserProxy {
    profileImage: string
    username: string
}

export interface UserProxy {
    id: string
    email: string
    username: string
    accountType: AccountType
    createAt: Date
    updateAt: Date
    profileImage: string
}

export interface UserState {
    login: LoginProxy | null
    user: UserProxy | null
    loading: boolean
    error: boolean
}
