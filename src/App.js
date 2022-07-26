import React, { useState, useRef } from "react";
import TodoList from "./TodoList";
import uuidv4 from "uuid/v4";

function App() {
  // const sample = [{ id: 1, text: "Learn React", completed: false },{ id: 2, text: "Learn Vue", completed: true },{ id: 3, text: "Learn Angular", completed: false }];

  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();

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
      <TodoList todos={todos} />
      <input ref={ todoNameRef } type="text" />
      <button onClick={ handleAddTodo }>Add</button>
      <button>Clear Completed</button>
      <div>{todos.length} left to do</div>
    </>
  );
}

export default App;
