import { all, takeLatest } from 'redux-saga/effects'

import { UserTypes } from './user/types'
import { CategoriesTypes } from './categories/types'
import { HighlightsPostsTypes } from './highlightsPosts/types'
import { CategoriesPostsTypes } from './categoriesPosts/types'

import { register } from './user/sagas'
import { getProfile } from './user/sagas'
import { loadCategories } from './categories/sagas'
import { loadPostsHighlights } from './highlightsPosts/sagas'
import { loadPostsByCategory } from './categoriesPosts/sagas'

export default function* rootSaga() {
    return yield all([
        takeLatest(CategoriesTypes.LOAD_REQUEST, loadCategories),
        takeLatest(HighlightsPostsTypes.LOAD_POSTS_HIGHLIGHTS_REQUEST, loadPostsHighlights),
        takeLatest(CategoriesPostsTypes.LOAD_POSTS_BY_CATEGORY_REQUEST, loadPostsByCategory),
        takeLatest(UserTypes.REGISTER_REQUEST, register),
        takeLatest(UserTypes.GET_PROFILE_REQUEST, getProfile)
    ])
}
