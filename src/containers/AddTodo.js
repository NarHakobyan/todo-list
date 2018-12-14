import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../store/actions'

const AddTodo = ({ dispatch }) => {
  let input

  return (


    <div className="container__footer">
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
        input.value = ''
      }}>
        <input placeholder="What do you need to do?" ref={node => input = node} />
        <button type="submit" className="button expanded">
          Add Todo
        </button>
      </form>
    </div>
  )
}

export default connect()(AddTodo)
