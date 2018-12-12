import React, { Component } from 'react'

class TodoItem extends Component {

    handleComplete() {
        this.props.onCompleteTodo(this.props.todo.id)
    }

    handleDelete() {
        this.props.onDeleteTodo(this.props.todo.id)
    }

    render() {
        return (
            <li>
              <div>{this.props.todo.text}</div>
              <button onClick={this.handleComplete.bind(this)}>Mark as completed</button>
              <button onClick={this.handleDelete.bind(this)}>Delete todo</button>
            </li>
        )
    }

}

export default TodoItem
