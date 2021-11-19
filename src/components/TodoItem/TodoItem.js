import React from 'react';
import "./TodoItem.scss";

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoItems: this.props.todoItems
    }
  }

  handleToggleDone = () => {
    this.props.handleToggleDone(this.props.action);
  }

  render() {
    return (
      <div className={this.props.done ? "todo-item done" : "todo-item"}>
        <div className="todo-text">{this.props.action}</div>
        <div className="todo-function">
          <div onClick={this.handleToggleDone} >
            {
              this.props.done ?
                <i className="fas fa-skull"></i>
                : <i className="far fa-check-circle"></i>
            }
          </div>
          <i className="far fa-edit"></i>
          <i className="far fa-trash-alt"></i>
        </div>
      </div>
    )
  }
}

export default TodoItem;