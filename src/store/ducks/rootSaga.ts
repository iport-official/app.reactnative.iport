import { loadCategories } from './categories/sagas'
import { CategoriesTypes } from './categories/types'
import { loadPostsByCategory } from './categoriesPosts/sagas'
import { CategoriesPostsTypes } from './categoriesPosts/types'
import { loadPostsHighlights } from './highlightsPosts/sagas'
import { HighlightsPostsTypes } from './highlightsPosts/types'
import { register } from './user/sagas'
import { getMe } from './user/sagas'
import { UserTypes } from './user/types'
import { all, takeLatest } from 'redux-saga/effects'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function* rootSaga() {
    return yield all([
        takeLatest(CategoriesTypes.LOAD_REQUEST, loadCategories),
        takeLatest(HighlightsPostsTypes.LOAD_POSTS_HIGHLIGHTS_REQUEST, loadPostsHighlights),
        takeLatest(CategoriesPostsTypes.LOAD_POSTS_BY_CATEGORY_REQUEST, loadPostsByCategory),
        takeLatest(UserTypes.REGISTER_REQUEST, register),
        takeLatest(UserTypes.GET_PROFILE_REQUEST, getMe)
    ])
}
