import React from 'react'
import FilterTabs from './components/FilterTabs'
import AddTodo from './containers/AddTodo'
import VisibleTodoList from './containers/ShowList'

const App = () => (
  <div>
    <AddTodo />
      <FilterTabs />
      <VisibleTodoList />
  </div>
)

export default App
