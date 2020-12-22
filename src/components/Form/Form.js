import React from 'react';
import './Form.css';

const Form = ({inputText, setInputText, todos, setTodos, setFilter}) => {

  // Functions
    // Sets the input field as state
    const handleInput = (el) => {
    setInputText(el.target.value)
  };
  
  // 1. Handles default actions, 2. Sets the state of todos
  const handleDefault = (el) => {
    el.preventDefault()
    setTodos([
      ...todos, {
        text: inputText,
        completed: false, 
        id: Math.floor(Math.random() * 10000)
      }
    ])
    // After submit, returns input to empty state
    setInputText("");
  };
  
  // Handles filters
  const handleFilters = (event) => {
    setFilter(event.target.value)
  }

  // Render()
  return (
    <form>
      <input type="text" 
             onChange={handleInput}
             value={inputText}
             class="todo-input"
             placeholder="Add a new task.." required 
             />
      <button className="todo-btn"
              type="submit"
              onClick={handleDefault}
              >
         <i class="fa fa-list"></i>
      </button>
      <div className="select">
        <select name="todos" className="filter-todo"
                             onChange={handleFilters}
                             >
          <option value="all">All</option>
          <option value="uncompleted"> Not completed</option>
          <option value="completed">Completed</option>
        </select>
      </div>
    </form>
  )
}

export default Form;