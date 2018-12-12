import React, { Component } from 'react'
import TodoItem from './TodoItem'

class TodoList extends Component {

    render() {
        return (
            <ul>
                {
                    this.props.todos.map((todo) => {
                        return <TodoItem key={todo.id} todo={todo}
                                         onDeleteTodo={this.props.onDeleteTodo}
                                         onCompleteTodo={this.props.onCompleteTodo}/>
                    })
                }

            </ul>
        )
    }

}

export default TodoList
