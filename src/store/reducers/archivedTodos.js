const archivedTodos = (state = [], action) => {
  switch (action.type) {
      case 'ARCHIVE_TODO':
        return [
            ...state,
                action
        ]
      default:
        return state
  }
}

export default archivedTodos
