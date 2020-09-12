import { all, take, takeLatest } from 'redux-saga/effects'

import { CategoriesTypes } from './categories/types'
import { loadCategories } from './categories/sagas'
import { PostsTypes } from './posts/types'
import { loadPostsByCategory, loadPostsHighlights } from './posts/sagas'

export default function* rootSaga() {
    return yield all([
        takeLatest(CategoriesTypes.LOAD_REQUEST, loadCategories),
        takeLatest(PostsTypes.LOAD_POSTS_BY_CATEGORY_REQUEST, loadPostsByCategory),
        takeLatest(PostsTypes.LOAD_POSTS_HIGHLIGHTS_REQUEST, loadPostsHighlights)
    ])
}
