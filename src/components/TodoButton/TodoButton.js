import React from 'react';
import "./TodoButton.scss";

class TodoButton extends React.Component {
  render() {
    return (
      <button className="todo-button">
        New todo
      </button>
    )
  }
}

export default TodoButton;