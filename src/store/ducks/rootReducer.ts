import { combineReducers } from 'redux'

import user from './user'
import categories from './categories'
import highlightsPosts from './highlightsPosts'
import categoriesPosts from './categoriesPosts'

export default combineReducers({
    user,
    categories,
    categoriesPosts,
    highlightsPosts,
})
