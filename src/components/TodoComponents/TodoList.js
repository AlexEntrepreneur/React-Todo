import React from 'react';

function TodoList({ todos }) {
  return (
    <div className="todo-list-container">
    {
      todos.map(todo => <div key={todo.id} className={`todo completed-${todo.completed}`}>{ todo.task }</div>)
    }
    </div>
  );
}

export default TodoList;
