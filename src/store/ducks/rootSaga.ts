import { all, takeLatest } from 'redux-saga/effects'

import { CategoriesTypes } from './categories/types'
import { loadCategories } from './categories/sagas'
import { HighlightsPostsTypes } from './highlightsPosts/types'
import { loadPostsHighlights } from './highlightsPosts/sagas'
import { CategoriesPostsTypes } from './categoriesPosts/types'
import { loadPostsByCategory } from './categoriesPosts/sagas'

export default function* rootSaga() {
    return yield all([
        takeLatest(CategoriesTypes.LOAD_REQUEST, loadCategories),
        takeLatest(HighlightsPostsTypes.LOAD_POSTS_HIGHLIGHTS, loadPostsHighlights),
        takeLatest(CategoriesPostsTypes.LOAD_POSTS_BY_CATEGORY, loadPostsByCategory)
    ])
}
