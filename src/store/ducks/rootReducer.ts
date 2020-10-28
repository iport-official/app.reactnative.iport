import categories from './categories'
import categoriesPosts from './categoriesPosts'
import highlightsPosts from './highlightsPosts'
import user from './user'
import { combineReducers } from 'redux'

export default combineReducers({
    user,
    categories,
    categoriesPosts,
    highlightsPosts,
})
