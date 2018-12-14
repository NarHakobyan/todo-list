import React from 'react'
import FilterTabs from './components/FilterTabs'
import AddTodo from './containers/AddTodo'
import VisibleTodoList from './containers/ShowList'

const App = () => (
  <div>
      <h1 className="page-title">Todo App</h1>

      <div className="row">
          <div className="column small-centered small-11 medium-6 large-5">
              <div className="container">
                  <FilterTabs />
                  <VisibleTodoList />
                  <AddTodo />
              </div>
          </div>
      </div>
  </div>


)

export default App
