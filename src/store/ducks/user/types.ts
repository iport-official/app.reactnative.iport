import { BaseArrayProxy } from './../common/base-array-proxy';

export enum UserTypes {
    LOGIN_REQUEST = '@user/LOGIN_REQUEST',
    LOGIN_SUCCESS = '@user/LOGIN_SUCCESS',
    LOGIN_FAILURE = '@user/LOGIN_FAILURE',
    REGISTER_REQUEST = '@user/REGISTER_REQUEST',
    REGISTER_SUCCESS = '@user/REGISTER_SUCCESS',
    REGISTER_FAILURE = '@user/REGISTER_FAILURE',
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

export interface RegisterProxy {
    profileImage: string
    email: string
    password: string
    username: string
    city: string
    state: string
    accountType: AccountType
    content: RegisterPersonalUserPayload | RegisterCompanyUserPayload
    telephones: string[]
    emails: string[]
}

export interface RegisterPersonalUserPayload {
    cpf: string
}

export interface RegisterCompanyUserPayload {
    street: string
    number: number
    cep: string
    cpnj: string
}

export interface PersonalUserProxy {
    cpf: string
}

export interface CompanyUserProxy {
    street: string
    number: number
    cep: string
    cpnj: string
}

export interface BaseUserProxy {
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
    content: PersonalUserProxy | CompanyUserProxy
    telephones: BaseArrayProxy<string>
    emails: BaseArrayProxy<string>
    profileImage: string
}

export interface UserState {
    login: LoginProxy | null
    register: RegisterProxy | null
    user: UserProxy | null
    loading: boolean
    error: boolean
}
