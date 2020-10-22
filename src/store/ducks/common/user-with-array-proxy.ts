import { BaseArrayProxy } from './base-array-proxy';

export interface UserWithArrayProxy<TUser, TValue> {
    user: TUser;
    arrayProxy: BaseArrayProxy<TValue>;
}
