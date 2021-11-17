import React from 'react';
import './App.scss';
import TodoItem from './components/TodoItem/TodoItem';
import TodoButton from './components/TodoButton/TodoButton'

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>Todolist</h1>
        <span className="subtitle">made by <a href="https://github.com/bongudth">bongudth</a></span>
        <div className="todo-list">
          <TodoItem />
          <TodoItem />
          <TodoItem />
          <TodoItem />
        </div>
        <TodoButton />
      </div>
    )
  }
}

export default App;
