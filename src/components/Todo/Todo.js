import React from 'react';
import './Todo.css';

// Importing props, input and todo from the top files.
const Todo = ({input, todo, todos, setTodos}) => {
  //Any function
  const handleDelete = () => {
    //Check id matching
    console.log(todo)
    setTodos(todos.filter((element) => element.id !== todo.id))
  };

  const handleComplete = () => {
    // Check id matching
    console.log(todo)
    setTodos(todos.map((element) => {
      if(element.id === todo.id) {
        return {
          ...element, completed: !element.completed
        }
      }
      return element;
    }))
  };

  // Render()
  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>{input}</li>
      <button className="complete-btn"
              onClick={handleComplete}><i className="fa fa-check-circle"></i></button>
      <button className="delete-btn"
              onClick={handleDelete}><i class="fa fa-minus-circle"></i></button>
    </div>
  )

}

export default Todo;