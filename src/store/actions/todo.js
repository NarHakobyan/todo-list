import * as actionTypes from './actionTypes'

export const addTodo = (text) => {
    return {
        type: actionTypes.ADD_TODO,
        text: text
    }
}

export const completeTodo = (id) => {
    return {
        type: actionTypes.COMPLETE_TODO,
        id: id
    }
}

export const deleteTodo = (id) => {
    return {
        type: actionTypes.DELETE_TODO,
        id: id
    }
}


export const createNewUserIdAsync = () => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(actionTypes.ADD_TODO())
        }, 2500)
    }
}
