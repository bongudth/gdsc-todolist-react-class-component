import React from 'react';
import "./TodoItem.scss";

class TodoItem extends React.Component {
  render() {
    return (
      <div className={this.props.done ? "todo-item done" : "todo-item"}>
        <div>{this.props.action}</div>
        <div>
          <i className="far fa-edit"></i>
          <i className="far fa-trash-alt"></i>
        </div>
      </div>
    )
  }
}

export default TodoItem;