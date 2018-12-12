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


export const setVisibilityFilter = filter => {
    return {
        type: actionTypes.setVisibilityFilter,
        filter
    }
}

export const toggleTodo = id => {
    return {
        type: actionTypes.toggleTodo,
        id
    }
}

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}
