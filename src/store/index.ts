import { createStore, Store, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './ducks/rootReducer'
import { CategoriesState } from './ducks/categories/types'
import rootSaga from './ducks/rootSaga'
import { CategoriesPostsState } from './ducks/categoriesPosts/types'
import { HighlightsPostsState } from './ducks/highlightsPosts/types'

export interface ApplicationState {
    categories: CategoriesState
    categoriesPosts: CategoriesPostsState,
    highlightsPosts: HighlightsPostsState
}

const sagaMiddleware = createSagaMiddleware()
const store: Store<ApplicationState> = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)

export default store
