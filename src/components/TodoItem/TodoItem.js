import React from 'react';
import "./TodoItem.scss";

class TodoItem extends React.Component {
  render() {
    return (
      <div className="todo-item">
        <div>Love you all</div>
        <div>
          <i className="fas fa-pencil-alt"></i>
          <i className="fas fa-eraser"></i>
        </div>
      </div>
    )
  }
}

export default TodoItem;