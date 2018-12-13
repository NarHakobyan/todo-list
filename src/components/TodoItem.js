import React, {Component} from 'react'
import PropTypes from 'prop-types'

class TodoItem extends Component {

    handleComplete() {
        document.getElementById("completed").disabled = true
        this.props.onClick(this.props.id)
    }

    handleDelete() {
        this.props.onDeleteTodo(this.props.id)
    }

    render() {
        return (
            <li>
                <div>
                    <input id="completed"
                           type="checkbox"
                           checked={this.props.completed}
                           disabled={this.props.completed}
                           onChange={this.handleComplete.bind(this)}
                    />
                    {this.props.text}</div>
                <button onClick={this.handleDelete.bind(this)}>Delete todo</button>
            </li>

        )
    }

}

TodoItem.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}

export default TodoItem
