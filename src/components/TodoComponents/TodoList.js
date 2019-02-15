import React from 'react';

class TodoList extends React.Component {
onCheckboxChange = (elementId, event) => {
    this.props.toggleTodoComplete(elementId, event); // Send state back up to App component
  }

  render() {
    return (
      <div className="todo-list-container">
        {
          this.props.todos.map(todo => {
            return (
              <div
                key={todo.id}
                className={`todo completed-${todo.completed}`}>
                { todo.task }
                <input type="checkbox" onChange={(event) => this.onCheckboxChange(todo.id, event)} checked={todo.completed} />
                </div>
            )
          })
        }
      </div>
    );
  }
}

export default TodoList;
