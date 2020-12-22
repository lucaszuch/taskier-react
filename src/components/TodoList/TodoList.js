import React from 'react';
import './TodoList.css';
import Todo from '../Todo/Todo';

const TodoList = ({todos, setTodos, status}) => {
  //Function

  return (
    <div className="todo-container">
      <ul className="todo-list">
        {/* Uses js .map() to check all the current todos and create a new one including the props */}
        {status.map((todo) => (
          <Todo input={todo.text}
                key={todo.id}
                todos={todos}
                setTodos={setTodos}
                todo={todo}
                />
        ))}
      </ul>
    </div>
  )
}

export default TodoList;