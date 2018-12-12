import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import TodoContainer from './containers/TodoContainer';
import './App.css';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
        <div id='app'>
            <TodoContainer />
        </div>
        </BrowserRouter>
    );
  }
}

export default App;
