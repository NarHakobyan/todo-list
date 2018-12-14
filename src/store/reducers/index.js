import { combineReducers } from 'redux'
import todos from './todos'
import archivedTodos from './archivedTodos'
import visibilityFilter from './visibilityFilter'

export default combineReducers({
    todos,
    archivedTodos,
    visibilityFilter
})
