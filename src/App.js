import React, { useState, useRef, useEffect } from "react";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from 'uuid';
// import uuidv4 from "uuid/v4"; ERROR

const LOCAL_STORAGE_KEY = "todoApp.todos";

function App() {
  // const sample = [{ id: 1, text: "Learn React", completed: false },{ id: 2, text: "Learn Vue", completed: true },{ id: 3, text: "Learn Angular", completed: false }];

  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();

  useEffect(() => { // load todos from local storage
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos !== null && storedTodos.length > 0) {
      setTodos(storedTodos) // correct check for empty array
    }
  }, [])

  useEffect(() => { // save todos to local storage
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  function toggleTodo(id) {
    const newTodos = [...todos];
    const todo = newTodos.find(t => t.id === id);
    todo.completed = !todo.completed; // toggle completed - using newTodos object reference
    setTodos(newTodos);
  }

  function handleAddTodo(e) {
    const text = todoNameRef.current.value;
    if (text === "") return
    setTodos([...todos, { id: uuidv4(), text, completed: false }]);
    // setTodos(prevTodos => {
    //   return [...prevTodos, { id: Date.now(), text, completed: false }]
    // });
    todoNameRef.current.value = null;
  }

  return (
    <>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <input ref={ todoNameRef } type="text" />
      <button onClick={ handleAddTodo }>Add</button>
      <button>Clear Completed</button>
      <div>{todos.filter(todo => !todo.completed).length} left to do !!</div>
    </>
  );
}

export default App;
