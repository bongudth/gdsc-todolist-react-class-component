import React from 'react';
import "../TodoForm/TodoForm.scss";

class TodoEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodoEdit: this.props.todoEdit
    };
  }

  handleChangeState = (e) => {
    this.setState({
      newTodoEdit: e.target.value
    });
  }

  handleEditTodo = () => {
    this.state.newTodoEdit ? this.props.handleEditTodo(this.state.newTodoEdit) : alert("Plizz write a new todo!");
  }

  render() {
    return (
      <div className="todo-form">
        <h2>Edit todo</h2>
        <input
          className="todo-input"
          placeholder="Add a new todo..."
          value={this.state.newTodoEdit}
          onChange={this.handleChangeState}
        />
        <button
          className="todo-submit"
          onClick={this.handleEditTodo}
        >
          Save
        </button>
      </div>
    )
  }
}

export default TodoEdit;