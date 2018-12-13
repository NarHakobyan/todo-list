import React, {Component} from 'react'
import {connect} from 'react-redux'

import TodoInput from '../components/TodoInput'
import TodoList from '../components/TodoList'
import ShowList from '../components/TodoList'
import FilterTabs from '../components/FilterTabs'
import * as actions from '../store/actions/index';


class TodoContainer extends Component {

    render() {
        return (
            <div>
                <TodoInput onAddTodo={this.props.onAddTodo}/>
                <FilterTabs/>
                <ShowList onDeleteTodo={this.props.onDeleteTodo}
                          onCompleteTodo={this.props.onCompleteTodo}
                          onArchiveTodo={this.props.onArchiveTodo}
                          onSetVisibilityFilter={this.props.onSetVisibilityFilter}
                          todos={this.props.todos}/>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        todos: state.todos

    };
}

const mapDispatchToProps = dispatch => {
    return {
        onAddTodo: (todo) => dispatch(actions.addTodo(todo)),
        onDeleteTodo: (id) => dispatch(actions.deleteTodo(id)),
        onCompleteTodo: (id) => dispatch(actions.completeTodo(id)),
        onArchiveTodo: (id) => dispatch(actions.completeTodo(id)),
        onSetVisibilityFilter: (filter) => dispatch(actions.setVisibilityFilter(filter)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer)

