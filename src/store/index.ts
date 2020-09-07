import { createStore, Store } from 'redux'

import rootReducer from './ducks/rootReducer'
import { CategoriesState } from './ducks/categories/types'

export interface ApplicationState {
    categories: CategoriesState
}

const store: Store<ApplicationState> = createStore(rootReducer)

export default store
