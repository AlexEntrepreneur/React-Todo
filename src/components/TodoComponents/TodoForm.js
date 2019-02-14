import React from 'react';

const initialInputState = { task: '', id: '', completed: false };

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialInputState;
    this.taskInputBox = React.createRef();
    this.submitTodo = props.addTodoFunction;
    this.clearCompletedTodos = props.clearCompletedTodosFunction;
  }

  onTaskInputChange = (changeEvent) => {
    this.setState({
      task: changeEvent.target.value,
    });
  }

  onClearButtonClick = () => {
    this.clearCompletedTodos()
  }

  submitTask = () => {
    if (this.state.task.length) {
      this.setState({ id: Date.now() });
      this.submitTodo(this.state);
      this.clearInput()
    }
  }

  clearInput = () => {
    this.setState(initialInputState);
  }

  componentDidMount() {
    // To listen for enter key being pressed
    this.taskInputBox.current.addEventListener('keydown', this.handleKeydownEvent);
  }

  componentWillUnmount() {
    this.taskInputBox.current.removeEventListener('keydown', this.handleKeydownEvent);
  }

  handleKeydownEvent = (keyPressed) => {
    if (keyPressed.key === 'Enter') {
      this.submitTask();
    }
  }

  render() {
    return (
      <div className="task-box-container">
        <div className="task-box">
          <input onChange={this.onTaskInputChange} ref={this.taskInputBox} value={this.state.task} className="task-input-box" type="text"></input>
          <p className="task-box-tip">Press Enter To Submit A Task</p>
        </div>
        <button onClick={this.onClearButtonClick}>Clear Complete Todos</button>
      </div>
    );
  }
}

export default TodoForm;
