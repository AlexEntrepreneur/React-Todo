import React from 'react';
import TodoList from './TodoList.js';
import TodoForm from './TodoForm.js';

function TodosContainer({ todosData, addTodoFunction }) {
  return(
    <section className="todos-container">
      <h1>Todo List App</h1>
      <TodoList todos={todosData} />
      <TodoForm addTodoFunction={addTodoFunction}/>
    </section>
  );
}

export default TodosContainer;
