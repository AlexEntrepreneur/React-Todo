import React from 'react';
import TodosContainer from './components/TodoComponents/Todo.js';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super()

    this.storedTodos = JSON.parse(localStorage.getItem('ReactTodo'));
    
    this.state = {
      todos: this.storedTodos
    }

  }

  addTodo = (taskData) => {
    this.setState(currentState => {
      return ({ todos: currentState.todos.concat(taskData)});
    });
  }

  componentDidUpdate() {
    const todosString = JSON.stringify(this.state.todos);
    localStorage.setItem('ReactTodo', todosString);
  }

  render () {
    return (
      <TodosContainer todosData={this.state.todos} addTodoFunction={this.addTodo} />
    );
  }
}

export default App;
