import React from 'react';
import "./TodoItem.scss";

class TodoItem extends React.Component {
  render() {
    return (
      <div className="todo-item">
        <div>Love you all</div>
        <div>
          <i class="fas fa-pencil-alt"></i>
          <i class="fas fa-eraser"></i>
        </div>
      </div>
    )
  }
}

export default TodoItem;