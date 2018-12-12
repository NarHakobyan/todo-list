import * as actionTypes from '../actions/actionTypes'


function getId(todos) {
    return todos.reduce((maxId, todo) => {
        return Math.max(todo.id, maxId)
    }, -1) + 1
}

let todoReducer = function(todos = [], action) {
    switch (action.type) {
        case actionTypes.ADD_TODO:
            return [{
                text: action.text,
                completed: false,
                id: getId(todos)
            }, ...todos]
        case actionTypes.COMPLETE_TODO:
            return todos.map((todo) => {
                return todo.id === action.id ?
                    Object.assign({}, todo, {completed: !todo.completed}) : todo
            })
        case actionTypes.DELETE_TODO:
            return todos.filter((todo) => {
                return todo.id !== action.id
            })
        default:
            return todos;
    }
}

export default todoReducer
