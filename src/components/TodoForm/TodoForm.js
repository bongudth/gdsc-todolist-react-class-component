import React from 'react';
import "./TodoForm.scss";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodo: ""
    }
  }

  handleChangeState = (e) => {
    this.setState({
      newTodo: e.target.value
    });
  }

  handleNewTodo = () => {
    this.state.newTodo ? this.props.handleAddTodo(this.state.newTodo) : alert("Plizz write a new todo!");
    this.setState({
      newTodo: ""
    })
  }

  render() {
    return (
      <div className="todo-form">
        <h2>New todo</h2>
        <input
          className="todo-input"
          placeholder="Add a new todo..."
          value={this.props.newTodo}
          onChange={this.handleChangeState}
        />
        <button
          className="todo-submit"
          onClick={this.handleNewTodo}
        >
          Submit
        </button>
      </div>
    )
  }
}

export default TodoForm;