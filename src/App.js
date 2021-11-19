import React from 'react';
import { Modal } from 'react-bootstrap';
import './App.scss';
import TodoItem from './components/TodoItem/TodoItem';
import TodoButton from './components/TodoButton/TodoButton';
import TodoForm from './components/TodoForm/TodoForm';
import TodoEdit from './components/TodoEdit/TodoEdit';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false,
      showEdit: false,
      todoEdit: "",
      todoItems: [
        { id: 1, action: 'Learn React', done: true },
        { id: 2, action: 'Learn Vue', done: false },
        { id: 3, action: 'Learn Angular', done: false }
      ]
    }
  }

  handleShowButton = () => {
    this.setState({
      showForm: true
    })
  }

  handleHideButton = () => {
    this.setState({
      showForm: false
    })
  }

  handleShowEdit = () => {
    this.setState({
      showEdit: true
    })
  }

  handleHideEdit = () => {
    this.setState({
      showEdit: false
    })
  }

  handleAddTodo = (todo) => {
    this.setState({
      showForm: false,
      todoItems: [...this.state.todoItems, { id: this.state.todoItems.length + 1, action: todo, done: false }]
    })
  }

  handleToggleDone = (todo) => {
    this.setState({
      todoItems: this.state.todoItems.map(item => {
        if (item.action === todo) {
          item.done = !item.done;
        }
        return item;
      })
    })
  }

  handleClickEdit = (todo) => {
    this.setState({
      showEdit: true,
      todoEdit: todo
    })
  }

  handleEditTodo = (todo) => {
    this.setState({
      showEdit: false,
      todoItems: this.state.todoItems.map(item => {
        if (item.action === this.state.todoEdit) {
          item.action = todo;
        }
        return item;
      })
    })
  }

  render() {
    return (
      <div className="container">
        <h1>Todolist</h1>
        <span className="subtitle">made by <a href="https://github.com/bongudth" target="_blank" rel="noopener noreferrer">bongudth</a></span>
        <div className="todo-list">
          {this.state.todoItems.map(item => (
            <TodoItem
              key={item.id}
              action={item.action}
              done={item.done}
              handleToggleDone={this.handleToggleDone}
              handleClickEdit={this.handleClickEdit}
            />
          ))}
        </div>
        <div onClick={this.handleShowButton}><TodoButton /></div>
        <Modal
          show={this.state.showForm}
          onHide={this.handleHideButton}
          size="md"
          centered
        >
          <Modal.Body>
            <TodoForm handleAddTodo={this.handleAddTodo} />
          </Modal.Body>
        </Modal>
        <Modal
          show={this.state.showEdit}
          onHide={this.handleHideEdit}
          size="md"
          centered
        >
          <Modal.Body>
            <TodoEdit todoEdit={this.state.todoEdit} handleEditTodo={this.handleEditTodo} />
          </Modal.Body>
        </Modal>
      </div>
    )
  }
}

export default App;
