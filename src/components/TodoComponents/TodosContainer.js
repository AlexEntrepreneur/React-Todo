import React from 'react';
import TodoList from './TodoList.js';
import TodoForm from './TodoForm.js';
import './Todos.css';

function TodosContainer({ todosData, addTodoFunction, toggleTodoCompleteFunction, clearCompletedTodosFunction }) {
  return(
    <section className="todos-container">
      <TodoList todos={todosData} toggleTodoComplete={toggleTodoCompleteFunction} />
      <TodoForm
        addTodoFunction={addTodoFunction}
        clearCompletedTodosFunction={clearCompletedTodosFunction}
      />
    </section>
  );
}

export default TodosContainer;
