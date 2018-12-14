const archivedTodos = (state = [], action) => {
  switch (action.type) {
    case 'ARCHIVE_TODO':
        return [
            ...state,
            {
                id: action.id,
                text: action.text,
                completed: false
            }
        ]
      default:
        return state
  }
}

export default archivedTodos
