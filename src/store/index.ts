import { CategoriesState } from './ducks/categories/types'
import { CategoriesPostsState } from './ducks/categoriesPosts/types'
import { HighlightsPostsState } from './ducks/highlightsPosts/types'
import rootReducer from './ducks/rootReducer'
import rootSaga from './ducks/rootSaga'
import { UserState } from './ducks/user/types'
import { createStore, Store, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

export interface ApplicationState {
    user: UserState
    categories: CategoriesState
    categoriesPosts: CategoriesPostsState,
    highlightsPosts: HighlightsPostsState
}

const sagaMiddleware = createSagaMiddleware()
const store: Store<ApplicationState> = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)

export default store
