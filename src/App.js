import React, { useState } from "react";
import TodoList from "./TodoList";

function App() {
  const [todos, setTodos] = useState(['Task 1', 'Task 2', 'Task 3']);

  return (
    <>
      <TodoList todos={todos} />
      <input type="text" />
      <button>Add</button>
      <button>Clear Completed</button>
      <div> left to do</div>
    </>
  );
}

export default App;
