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
      showForm: false
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

  render() {
    return (
      <div className="container">
        <h1>Todolist</h1>
        <span className="subtitle">made by <a href="https://github.com/bongudth">bongudth</a></span>
        <div className="todo-list">
          <TodoItem />
        </div>
        <div onClick={this.handleShowButton}><TodoButton /></div>
        <Modal
          show={this.state.showForm}
          onHide={this.handleHideButton}
          size="md"
          centered
        >
          <Modal.Body>
            <TodoForm />
          </Modal.Body>
        </Modal>
      </div>
    )
  }
}

export default App;
