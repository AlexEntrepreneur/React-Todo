import React from 'react';
import TodosContainer from './components/TodoComponents/Todo.js';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super()

    this.state = {
      todos: [{ task: 'test task', id: '12314345', completed: false }, { task: 'test task 3428976', id: '765714345', completed: true }]
    }

  }

  addTodo = (taskData) => {
    this.setState(currentState => {
      return ({ todos: currentState.todos.concat(taskData)});
    });
  }

  render () {
    return (
      <TodosContainer todosData={this.state.todos} addTodoFunction={this.addTodo} />
    );
  }
}

export default App;
