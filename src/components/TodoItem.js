import React, {Component} from 'react'
import PropTypes from 'prop-types'

class TodoItem extends Component {

    handleComplete() {
        this.props.onClick()
    }

    handleDelete() {
        this.props.onDeleteTodo()
    }

    handleArchive() {
        this.props.onArchiveTodo()
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
                <button onClick={this.handleArchive.bind(this)}>Archive todo</button>
            </li>

        )
    }

}

TodoItem.propTypes = {
    onClick: PropTypes.func.isRequired,
    onArchiveTodo: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}

export default TodoItem
