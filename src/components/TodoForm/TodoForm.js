import React from 'react';
import "./TodoForm.scss";

class TodoForm extends React.Component {
  render() {
    return (
      <form className="todo-form">
        <h2>New todo</h2>
        <input className="todo-input"></input>
        <button className="todo-submit">Submit</button>
      </form>
    )
  }
}

export default TodoForm;