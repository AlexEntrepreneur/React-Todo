import React from 'react';
import TodoList from './TodoList.js';
import TodoForm from './TodoForm.js';

function TodosContainer({ todosData, addTodoFunction, toggleTodoCompleteFunction }) {
  return(
    <section className="todos-container">
      <TodoList todos={todosData} toggleTodoComplete={toggleTodoCompleteFunction} />
      <TodoForm addTodoFunction={addTodoFunction}/>
    </section>
  );
}

export default TodosContainer;
