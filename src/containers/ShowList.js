import {connect} from 'react-redux'
import {toggleTodo, deleteTodo, archiveTodo} from '../store/actions'
import TodoList from '../components/TodoList'
import {VisibilityFilters} from '../store/actions'

const getVisibleTodos = (todos, archivedTodos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed)
    case VisibilityFilters.SHOW_ARCHIVE:
      return archivedTodos
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.archivedTodos, state.visibilityFilter)
})

const mapDispatchToProps = dispatch => ({
    toggleTodo: id => dispatch(toggleTodo(id)),
    onDeleteTodo: (id) => dispatch(deleteTodo(id)),
    onArchiveTodo: (id) => dispatch(archiveTodo(id))

})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)
