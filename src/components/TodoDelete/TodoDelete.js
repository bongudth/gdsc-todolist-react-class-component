import React from 'react';
import "../TodoForm/TodoForm.scss";

class TodoDelete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoDelete: this.props.todoDelete
    }
  }

  handleDeleteTodo = () => {
    this.props.handleDeleteTodo(this.props.todoDelete);
  }

  render() {
    return (
      <div className="todo-form">
        <h2>Delete todo</h2>
        <div className="todo-input" >
          {this.state.todoDelete}
        </div>
        <button
          className="todo-submit"
          onClick={this.handleDeleteTodo}
        >
          Delete
        </button>
      </div>
    )
  }
}

export default TodoDelete;