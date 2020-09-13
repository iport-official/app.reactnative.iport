import { combineReducers } from 'redux'

import categories from './categories'
import highlightsPosts from './highlightsPosts'
import categoriesPosts from './categoriesPosts'

export default combineReducers({
    categories,
    categoriesPosts,
    highlightsPosts
})
