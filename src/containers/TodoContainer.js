import React, {Component} from 'react'
import {connect} from 'react-redux'

import TodoInput from '../components/TodoInput'
import TodoList from '../components/TodoList'
import * as actions from '../store/actions/index';


class TodoContainer extends Component {

    render() {
        return (
            <div>
                <TodoInput onAddTodo={this.props.onAddTodo}/>
                <TodoList onDeleteTodo={this.props.onDeleteTodo}
                          onCompleteTodo={this.props.onCompleteTodo}
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
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer)

