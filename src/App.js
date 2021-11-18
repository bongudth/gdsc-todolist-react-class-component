import React from 'react';
import { Modal } from 'react-bootstrap';
import './App.scss';
import TodoItem from './components/TodoItem/TodoItem';
import TodoButton from './components/TodoButton/TodoButton'
import TodoForm from './components/TodoForm/TodoForm'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false,
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

  handleAddTodo = (todo) => {
    this.setState({
      showForm: false,
      todoItems: [...this.state.todoItems, { id: this.state.todoItems.length + 1, action: todo, done: false }]
    })
  }

  render() {
    return (
      <div className="container">
        <h1>Todolist</h1>
        <span className="subtitle">made by <a href="https://github.com/bongudth" target="_blank" rel="noopener noreferrer">bongudth</a></span>
        <div className="todo-list">
          {this.state.todoItems.map(item => (
            <TodoItem key={item.id} action={item.action} done={item.done} />
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
      </div>
    )
  }
}

export default App;
