import './App.css';
import React, {useState, useEffect} from 'react';

import Form from '../components/Form/Form'
import TodoList from '../components/TodoList/TodoList'

function App() {
  // States
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');
  const [status, setStatus] = useState([]);

  // Use effect - running once
  useEffect(() => {
    getFromLocal();
  }, []);

  // Use effect - running more than once
  useEffect(() => {
    handleStatus();
  }, [todos, filter]);

  // Functions
  const handleStatus = () => {
    switch(filter) {
      case 'completed':
        setStatus(todos.filter(todo => todo.completed === true))
        break;
      case 'uncompleted':
        setStatus(todos.filter(todo => todo.completed === false))
        break;
      default:
        setStatus(todos)
        break;
    }
  };

  // Saves todos to localStorage
  const saveToLocal = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  };

  const getFromLocal = () => {
    if(localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem('todos'));
      setTodos(todoLocal);
    }
  };

  // Render()
  return (
    <div className="App">
      <header>
        <h1>TASKIER</h1>
        <nav>
            <ul>
              <a href="https://github.com/lucaszuch" target="_blank"><li><i className="fa fa-github"></i></li></a>
            </ul>
        </nav>
      </header>
      <div className="App-form">
          <Form setInputText={setInputText}
                inputText={inputText}
                todos={todos}
                setTodos={setTodos}
                setFilter={setFilter}
                />
          <TodoList todos={todos}
                    setTodos={setTodos}
                    status={status}
                    />
      </div>
    </div>
  );
}

export default App;
