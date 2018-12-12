import React, {Component} from 'react'

class TodoItem extends Component {

    handleComplete() {
        document.getElementById("completed").disabled = true
        this.props.onCompleteTodo(this.props.todo.id)
    }

    handleDelete() {
        this.props.onDeleteTodo(this.props.todo.id)
    }

    render() {
        return (
            <li>
                <div>
                    <input id="completed" type="checkbox" onChange={this.handleComplete.bind(this)}/>
                    {this.props.todo.text}</div>
                <button onClick={this.handleDelete.bind(this)}>Delete todo</button>
            </li>
        )
    }

}

export default TodoItem
